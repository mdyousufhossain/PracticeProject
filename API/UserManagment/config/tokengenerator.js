const jwt = require("jsonwebtoken");
 require('dotenv').config();
 
 
 const generateTokensAndSetCookies = async (res, email, user ) => {
  try {
    // Generate access token
    const accessToken = jwt.sign(
      { email },
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
    user.refreshToken = refreshToken;
    const result = await user.save();
    console.log(result);

    // Set cookies in the response ___
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, // Uncomment this line if you are using HTTPS in production
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw error; // Handle error in the calling function
  }
};


module.exports =  generateTokensAndSetCookies