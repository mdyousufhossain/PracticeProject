const Task = require("../model/taskModel");


// create item in the database
const createTask = async (req, res) => {
    try {
        // creating task in database
        const task = await Task.create(req.body);
        res.status(200).json(task);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
};


// gets data from the database 
const readTask = async (req,res) => {
    try {
        // extracing data from the database
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ msg: error.message });
      }
}





module.exports = { createTask, readTask }
