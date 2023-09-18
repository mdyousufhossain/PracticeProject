const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


/*
******

  authenticate is real pain in ass but there is some demonstrate 
  first we will destruct some information from the db 
  then check if they exist if they do then we will check their access pass is correct if they have then we will give access 
  thats the plan

****** 
*/



const LoginHandler = async (req, res) => {
  const { email, password } = req.body;

  const findUser = await User.findOne({ email });

  if (!findUser) {
    res.status(401); // unauthorized

    throw new Error("There is no user goes by this email");
  }

  const match = await bcrypt.compare(password, findUser.password);

  if (match) {
    const roles = Object.values(findUser.roles).filter(Boolean);
    // using jwt 
    const accessToken = jwt.sign(
      {
        userInfo: {
          email: findUser.email,
          roles: roles,
        },
      },

      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );

    // saving the refreashtoken in database
    const refreshToken = jwt.sign(
      { email: findUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    findUser.refreshToken = refreshToken;
    const result = await findUser.save();
    console.log(result);

    // Creating secure cookie with refresh token

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 1000,
    });

    // sending authorization roles and access token to user 
    res.json({
      email,
      roles,
      accessToken,
    });
  } else {
    res.sendStatus(401);
  }
};


module.exports = LoginHandler