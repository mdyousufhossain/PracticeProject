const User = require("../model/userModel");


/**
 *
 * @param { Object} req
 * @param { Object} res
 */

const registerUser = async (req, res) => {
  // new user creating
  try {
    const { name, email, password } = req.body;

    // validation
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please fill in all required fields");
    }
    if (password.length < 6) {
      throw new Error("At least 6 character is needed");
    }
    // check if user exist
    const userExist = await User.findOne({ email });
  // cat create account if you have already acocunt
    if (userExist) {
      res.status(400);
      throw new Error("This email already been register");
    }



    const user = await User.create({
      name,
      email,
      password ,
    });
    //checcing if suer exist in database
    if (user) {
      const { _id, name, email, photo, bio } = user;
      res.status(201).json({
        _id,
        name,
        email,
        photo,
        bio,
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = registerUser;
