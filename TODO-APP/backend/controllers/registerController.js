const { Admin } = require("../config/roles_list");
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");

const registerNewUser = async (req, res) => {
  const { name, email, password, photo,roles } = req.body;

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

    const user = await User.create({
      "name":name,
      "email":email,
      "password":password,
      "photo":photo,
      "roles":roles
    });

    res.status(201).json({
      name,
      email,
      roles
    });

  } catch (error) {
    // error msg
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
};

module.exports = registerNewUser;
