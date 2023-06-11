const dotenv = require("dotenv").config()
const express = require("express");
const connectDB = require('./config/connectDB')



const app = express();
const port = 3000;

connectDB()

app.get("/", (req,res) => {
  res.send("hey this is response")
})


/**
 *  starting the server 
 *  connecting the server using 
 * http://localhost:3000
 */
const startServer = async () => {
  try {
    // server conneceting funtion
    connectDB()
    // starting the server 
    app.listen(port, () => {
      console.log(`server started at : http://localhost:${port}/`);
    });
      
  } catch (error) {

    console.error(error)
      
  }
}

// mongodb+srv://yousafhossain:<yousaf123>@tododatabase.cmkwxhd.mongodb.net/?retryWrites=true&w=majority