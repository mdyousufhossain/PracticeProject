
const Userdb = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cookie = require('cookie-parser')

const generateTokensAndSetCookies = require('../config/tokengenerator')



const handleRegister = async (req, res) => {
  const { name, email, password, roles  } = req.body;

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
    const user = await Userdb.findOne({ email });
    // generating cookies with the function 
    const token = await generateTokensAndSetCookies(res,email,user)
    // Send the success response
    res.status(201).json({ success: `New user ${name} ${email} ${token}created!` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};





module.exports = handleRegister