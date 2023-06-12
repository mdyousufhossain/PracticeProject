const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000; // localhost port

// Middleware

/********************* */
/**
 *
 * middlwere is function that can
 * run middle of a route
 * it can access route req,res funciton
 * the next funciton is middlewhere special funciton
 *
 */

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const logger = (req,res,next) => {
//   console.log("Middlewere Run")
//   // middlewere special funtion
//   next()
// }

//   route
app.post("/api/tasks", async (req, res) => {
  try {
    // creating task in database
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// reading data
app.get("/api/tasks", async (req, res) => {
  try {
    // extracing data from the database
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

/**
 *  starting the server
 *  connecting the MongdoDB database
 *  using default server address : http://localhost:3000
 *  connecting database before the server
 * it will help to prevent weird bugs and error
 */
const startServer = async () => {
  try {
    //calling for database connection
    await connectDB();
    // starting the server
    app.listen(port, () => {
      console.log(`server started at : http://localhost:${port}/`);
    });
  } catch (error) {
    console.error(error);
  }
};

// calling server
startServer();
