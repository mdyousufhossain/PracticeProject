const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const Task = require("./model/taskModel");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000; // localhost port
const taskRoutes = require("./routes/taskRoute");

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
app.use(taskRoutes);

// const logger = (req,res,next) => {
//   console.log("Middlewere Run")
//   // middlewere special funtion
//   next()
// }

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