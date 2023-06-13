const express = require("express")
const Task = require("../model/taskModel");
const { createTask, getSingleTask, gettingAllTask, deleteTask } = require("../controllers/taskController");

const router = express.Router()



/**_____
 * This section is for api endpoint routeing
 * Its CRUD applicaiton so there will be few end points
 *  
 * author : github/mdyousufhossain
 *  */  

// creating data or sending data to the database  
router.post("/api/tasks", createTask);
  
// reading all data
router.get("/api/tasks", gettingAllTask);

// reading single data
router.get("/api/tasks/:id", getSingleTask);
router.delete("/api/tasks/:id", deleteTask);


module.exports = router