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
const gettingAllTask = async (req, res) => {
  try {
    // extracing data from the database
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    // destructering id from the database
    // querying data by findByeId method
    const task = await Task.findById(id);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { createTask, gettingAllTask, getSingleTask };
