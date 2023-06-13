const express = require("express")
const Task = require("../model/taskModel");
const { createTask, getSingleTask, gettingAllTask, deleteTask, updateTask } = require("../controllers/taskController");

const router = express.Router()



/**_____
 * This section is for api endpoint routeing
 * Its CRUD applicaiton so there will be few end points
 *  
 * author : github/mdyousufhossain
 *  */  

// creating data or sending data to the database  
router.post("/",createTask);
  
// reading all data
router.get( "/", gettingAllTask);

// reading single data
router.get("/:id", getSingleTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);


module.exports = router