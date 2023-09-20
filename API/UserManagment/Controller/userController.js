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

module.exports = {
  getAlluser,
};
