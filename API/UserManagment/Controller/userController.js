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


/*
  Roles : Auhtor 
 * 
 */


const getSingleUserAndUpdate = async (req, res) => {
  try {

    const { id } = req.params;
    // Find the user by ID
    const user = await Userdb.findById(id);

    if (!user) {
      return res.status(404).json({ message: `No User was found : ${id}` });
    }

    // Check if the request body contains a "name" field
    if (!req.body.name) {
      return res.status(400).json({ message: 'Name field is required for update' });
    }

    // Check if the request body contains "email" or "password"
    if (req.body.email || req.body.password) {
      /* 

       If authentication fails, return a 401 status code.
       If authentication succeeds, proceed with the update.

      */
      return res.status(401).json({ message: 'Authentication required for email and password updates' });
    }

    // Update only the "name" field
    user.name = req.body.name;

    // Save the updated user
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
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
