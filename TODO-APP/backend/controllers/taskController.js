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
    // if id is not exist in database
    if (!task) return res.status(404).json(`No item was found : ${id}`);

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// deleteting task
const deleteTask = async (req, res) => {
  try {
    // destrcuting id from the database params
    const { id } = req.params;
    //using mangoose method to find and delete an item
    const task = await Task.findByIdAndDelete(id);
    // checking if id exist
    if (!task) return res.status(404).json(`No task found   with ${id}`);

    res.status(200).send("Task has been deleted successfully");
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// updating funciton

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    // updateing item in database
    const task = await Task.findByIdAndUpdate(
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

module.exports = {
  createTask,
  gettingAllTask,
  getSingleTask,
  deleteTask,
  updateTask,
};
