const UserDb = require("../Model/UserModel");

class MainController {
  constructor(database) {
    // Store the database connection or instance
    this.db = database; 
  }

  async getAllUser(req, res) {
    try {
      const userList = await this.db.find(); 
      if (!userList) return res.status(204).json({ message: "No User found" });

      res.json(userList);
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: error.message });
    }
  }

  async getSingleUser(req, res) {
    try {
      const { id } = req.params;

      const user = await this.db.findById(id); 

      if (!user)
        return res.status(404).json({ message: `No item was found: ${id}` });

      res.status(200).json(user);
      console.log(`User found! ${id}`);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async getSingleUserAndDelete(req, res) {
    try {
      const { id } = req.params;

      const user = await this.db.findByIdAndDelete(id); 

      if (!user)
        return res.status(404).json({ message: `No User was found: ${id}` });

      res.status(200).json(user);
      console.log(`User Deleted! ${id}`);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }

  async getSingleUserAndUpdate(req, res) {
    try {
      const { id } = req.params;

      const user = await this.db.findById(id); // Use the provided database connection

      if (!user)
        return res.status(404).json({ message: `No User was found: ${id}` });

      if (!req.body.name) {
        return res
          .status(400)
          .json({ message: "Name field is required for update" });
      }

      if (req.body.email || req.body.password) {
        return res
          .status(401)
          .json({
            message: "Authentication required for email and password updates",
          });
      }

      user.name = req.body.name;
      const updatedUser = await user.save();

      res.status(200).json(updatedUser);
      console.log(`User Updated ${id}`);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
}


// getting updated
module.exports = MainController;
