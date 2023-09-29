const Userdb = require("../Model/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateTokensAndSetCookies = require('../config/tokengenerator') 
require('dotenv').config();

const loginHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res
      .sendStatus(400)
      .json({ message: "Please Add email or password" });

  const duplicate = await Userdb.findOne({ email });

  if (!duplicate)
    return res
      .sendStatus(401)
      .json({ message: "No register account Please create an account " });
  // comparing password  
  const match = await bcrypt.compare(password,duplicate.password);

  if (match) {
    const roles = Object.values(duplicate.roles).filter(Boolean);

    console.log(roles)
    const accessToken = jwt.sign(
      {
            "email": duplicate.email,
            "roles": roles
    },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: "15m" }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { email },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: "1d" }
    );

    // Save the refresh token in the database (assuming "duplicate" is the user)
    duplicate.refreshToken = refreshToken;
    const result = await duplicate.save();
    console.log(result);

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
    console.log("user logged in:", email);
  } else {  
    res.sendStatus(401);
  }
};


module.exports = loginHandler;
