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

    const token = await generateTokensAndSetCookies(res,email,duplicate)

    res.json({
      email,
      token,
      success: `User logged in ${email} ${password}`,
    });
    console.log("user logged in:", email);
  } else {
    
    res.sendStatus(401);
  }
};


module.exports = loginHandler;
