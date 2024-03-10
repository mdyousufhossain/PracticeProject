const asyncHandler = require('express-async-handler');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require('../../Model/User.Model')



const handleRegister = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Checking if there is a user with that email
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: "This email is already in use" });
  }

  // Checking if required fields are filled
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Please fill all the required fields" });
  }

  // Hashing the password
  const hashed = await bcrypt.hash(password, 10);

  // Create a new user
  const newUser = await User.create({
    name,
    email,
    password: hashed,
  });

  // Generate access token
  const accessToken = jwt.sign(
    { userid: newUser._id, email: newUser.email },
    process.env.ACCESS_TOKEN_SECRET_1,
    { expiresIn: "15m" }
  );

  // Generate refresh token
  const refreshToken = jwt.sign(
    { userid: newUser._id, email: newUser.email },
    process.env.REFRESH_TOKEN_SECRET_2,
    { expiresIn: "1d" }
  );

  // Save refresh token in the database
  newUser.refreshToken = refreshToken;
  await newUser.save();

  // Set cookie in the response
  res.cookie("jwt", refreshToken, {
    httpOnly: true,
    //sameSite: "None",  // Uncomment if needed for cross-site access
    maxAge: 24 * 60 * 60 * 1000,
    // secure: true, // Uncomment if using HTTPS in production
  });

  // Send the success response
  res.status(201).json({
    email,
    accessToken,
    success: `New user ${name} ${email} created!`,
  })
});

module.exports = handleRegister;
