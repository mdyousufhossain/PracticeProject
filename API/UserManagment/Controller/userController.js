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

/*

  singe user detector this one is only for who are authenticated
  and authorized user
  roles : author,Admin

*/
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

/*
  
Roles : admin only

*/

const getSingleUserAndDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await Userdb.findByIdAndDelete(id);

    if (!User) return res.status(404).json({ message: `No User was found : ${id}` });

    res.status(200).json(User);
    console.log(`User Deleted ! ${id}`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getSingleUserAndUpdate = async (req, res) => {
  try {
    const { id } = req.params;

    const User = await Userdb.findByIdAndUpdate(
      { _id: id }, // verifying the id
      req.body, // updating the body
      {
        new: true, // new item will be accepted
        runValidators: true,
      }
    );

    if (!User) return res.status(404).json({ message: `No User was found : ${id}` });

    res.status(200).json(User);
    console.log(`User Updated ${id}`);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};




module.exports = {
  getAlluser,
  getSingleUser,
  getSingleUserAndDelete,
  getSingleUserAndUpdate
};
