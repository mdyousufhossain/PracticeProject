const { json } = require("express");
const Userdb = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { name, email, password, roles } = req.body;

  // checking if there is duplicate
  const User = await Userdb.find({ email }).exec();
  if (User) {
    res.status(409); // conflic
    throw new Error("This email already in use");
  }

  // checking if its filled or not 
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the required field");
  }

  try {
    // hashing User
    const hashed = await bcrypt.hash(password, 10);
    // creating user 
    const result = await Userdb.create({
      name: name,
      email: email,
      password: hashed,
      roles: roles,
    });

    console.log(result);
    res.status(201).json({ success: `New user ${name} ${email} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = register