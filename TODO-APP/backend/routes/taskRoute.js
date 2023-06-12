const express = require("express")
const Task = require("../model/taskModel");
const { createTask,readTask } = require("../controllers/taskController");

const router = express.Router()



//   route
router.post("/api/tasks", createTask);
  
// reading data
router.get("/api/tasks", readTask);


module.exports = router