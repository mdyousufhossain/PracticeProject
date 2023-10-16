const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const ScemaUserMemberdb = require('../../Model/memberModel');


const handleMemberRegister = async (req, res) => {

  const { name,email,password,photo } = req.body;


  try {
    // Checking if there is a user user
    const existingUser = await ScemaUserMemberdb.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "This email is already in use" });
    }

    // Checking if required fields are filled
    if (!name || !email || !password) {
      return res
        .status(400) // bad request 
        .json({ error: "Please fill all the required fields" });
    }

    // Hashing the password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = await ScemaUserMemberdb.create({
      name,
      email,
      photo,
      password: hashed,
      
    });

    // new user assigned 

    console.log(newUser)
    const user = await ScemaUserMemberdb.findOne({ email });
    // generating cookies with the function
    //const roles = Object.values(user.roles).filter(Boolean);

    const accessToken = jwt.sign(
      { 
        userid:user._id,
        email: user.email,
      },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: "15m" }
    );

    // Generate refresh token
    const refreshToken = jwt.sign(
      { 
        userid:user._id,
        email: user.email 
        
      },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: "1d" }
    );

    // Save the refresh token in the database (assuming "user" is the user)
    user.refreshToken = refreshToken;
    const result = await user.save();
    console.log(result);

    // Set cookies in the response ___
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      //sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, // Uncomment this line if you are using HTTPS in production
    });

    // Send the success response
    res.status(201).json({
      email,
      accessToken,
      success: `New user ${name} ${email} created!`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = handleMemberRegister;