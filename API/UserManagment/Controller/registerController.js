
const Userdb = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookie = require('cookie-parser')



const register = async (req, res) => {
  const { name, email, password, roles , refreshToken  } = req.body;

  try {
    // Checking if there is a duplicate user
    const existingUser = await Userdb.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "This email is already in use" });
    }

    // Checking if required fields are filled
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill all the required fields" });
    }

    // Hashing the password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = await Userdb.create({
      name,
      email,
      password: hashed,
      roles,
    });

    console.log(newUser);

    // Create and set cookies
    const accessToken = jwt.sign(
      { email },
      process.env.ACCESS_TOKEN_SECRET_1,
      { expiresIn: "15m" }
    );

    const refreshToken1 = jwt.sign(
      { email },
      process.env.REFRESH_TOKEN_SECRET_2,
      { expiresIn: "1d" }
    );

    console.log("user data stored in cookies:", newUser);

    // Set cookies in the response
    res.cookie("jwt", accessToken, {
      httpOnly: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      // secure: true, // Uncomment this line if you are using HTTPS
    });
    
    Userdb.refreshToken = refreshToken1

    // Send the success response
    res.status(201).json({ success: `New user ${name} ${email} ${refreshToken}created!` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = register