const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

const registerNewUser = async (req, res) => {
  const { name, email, password, photo } = req.body;

  const user = await User.findOne({ email });
  // duplicate user
  if (user) {
    res.status(409); // conflic
    throw new Error("This email already been register");
  }
  // validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all required fields");
  }
  if (password.length < 6) {
    throw new Error("At least 6 character is needed");
  }

  // new user creating
  try {
    /*
      creating the account required filled are also validated in database schema 
  
      name , email , password are required and bio and photo are the optional 
      */

    const hashedPwd = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      hashedPwd,
      photo,
    });
    // gen jwt token

    //checcing if suer exist in database

    res.status(201).json({
      _id,
      name,
      email,
      photo,
      bio,
      token,
    });

  } catch (error) {
    // error msg
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = registerNewUser;
