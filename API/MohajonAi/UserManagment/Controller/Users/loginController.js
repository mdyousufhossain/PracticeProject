const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { logEvents } = require("../../Middleware/logger");
const User = require("../../Model/user.model");
//const generateTokensAndSetCookies = require('../config/tokengenerator')
require("dotenv").config();

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .sendStatus(400)
      .json({ message: "Please Add email or password" });

  const duplicate = await User.findOne({ email });

  if (!duplicate)
    return res
      .sendStatus(401)
      .json({ message: "No register account Please create an account " });

  // extra layer of defend checking if this account already tried multiple times
  if (
    duplicate.accountLockedUntil &&
    duplicate.accountLockedUntil > new Date()
  ) {
    return res.status(401).json({
      message:
        "Account locked. Too many failed login attempts. Try again later.",
    });
  }

  // comparing password
  const match = await bcrypt.compare(password, duplicate.password);

  if (match) {
    // this is direcly from the database we shoudl't use cache for this bcz cache is for kids 
    // real man fetch direcly from the database : >
    duplicate.loginAttempts = 0; // 5 failed attems will lock the account 
    // and successful login will reset the course  
    duplicate.accountLockedUntil = null; // Reset account lockout
    await duplicate.save();

    /**
     * dev env will use 15min in prod we will way less cause why not 
     * but every time user require access token 
     * user will request in database for refresh token so its kinda costly 
     * so 30min will do fine  
     * @todo updtate the expire to the 30min in prod
     * 
     */
    const accessToken = jwt.sign(
      { userid : duplicate._id,
        email: duplicate.email
      },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: "15m" }
    );

    /**
     * refresh token will generate access token , when accesstoken expire and if user provie right
     * credential , access token will genrate by requesting refresh token from the database , and 
     * even if it expire in database a new refresh token will generate then it will prove new access token 
     * costly right  ? 
     */
    const refreshToken = jwt.sign(
      { userid : duplicate._id,
        email: duplicate.email },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: "1d" }
    );

    duplicate.refreshToken = refreshToken;
    await duplicate.save();

    // Set cookies in the response ___
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      //sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, // Uncomment this line if you are using HTTPS in production
    });

    res.json({
      email,
      accessToken,
      success: `User logged in ${email} ${password}`,
    });
  } else {
    // Increment login attempts on each failed attempt
    duplicate.loginAttempts++;
    await duplicate.save();

    if (duplicate.loginAttempts >= 5) {
      // Lock the account for 15 minutes
      duplicate.accountLockedUntil = new Date(Date.now() + 1 * 60 * 1000); // should be at least 15 in prod
      await duplicate.save();

      return res.status(401).json({
        message:
          "Account locked. Too many failed login attempts. Try again later.",
      });
    }

    // Handle unsuccessful login attempts
    return res.sendStatus(401);
  }
};

module.exports = loginHandler;
