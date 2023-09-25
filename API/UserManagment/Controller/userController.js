const Userdb = require("../Model/UserModel");

const getAlluser = async (req, res) => {
  try {
    const UserList = await Userdb.find();
    if (!UserList) return res.status(204).json({ message: "No User found" });

    res.json(UserList);
  } catch (error) {
    console.error(error);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await Userdb.findById(id);

    if (!User) return res.status(404).json({ message: `No item was found : ${id}` });

    res.status(200).json(User);
    console.log(`User found ! ${id}`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


module.exports = {
  getAlluser,
  getSingleUser 
};
