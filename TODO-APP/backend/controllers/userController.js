const Users = require("../model/userModel");




const gettingAllUsers = async (req, res) => {
  try {
    const UserList = await Users.find();

    if (!UserList)
      return res.status(204).json({
        message: "No User found",
      });

    res.json(UserList);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};



const deleteUser = async (req, res) => {
  try {
    // destrcuting id from the database params
    const { id } = req.params;
    //using mangoose method to find and delete an item
    const user = await Users.findByIdAndDelete(id);
    // checking if id exist
    if (!user) return res.status(404).json(`No task found   with ${id}`);

    res.status(200).send("Task has been deleted successfully");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    // updateing item in database
    const user = await Users.findByIdAndUpdate(
      { _id: id }, // verifying the id
      req.body, // updating the body
      {
        new: true, // new item will be accepted
        runValidators: true,
      }
    );
    if (!id) return res.status(404).json(`No task found with this ${id}`);
    // upatating to the front end
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};




const gettingOneUser = async (req, res) => {
  try {
    const user = await Users.findById(req.user._id);

    if (user) {
      const { _id, name, email, photo, bio } = user;
      res.status(200).json({
        _id,
        name,
        email,
        photo,
        bio,
      });
    }
  } catch (error) {
    console.log(error, "user not found");
    res.status(401).json({ msg: error.message });
  }
};

module.exports = {
  gettingAllUsers,
  gettingOneUser,
  deleteUser,
  updateUser
};
