const register = require("../Controller/registerController");
const {
  getAlluser,
  getSingleUser,
  getSingleUserAndDelete,
  getSingleUserAndUpdate,
} = require("../Controller/userController");
const loginHandler = require("../Controller/loginController");
require("dotenv").config();

const express = require("express");
const router = express.Router();

router
  .post("/register", register)
  .get("/alluser", getAlluser)
  .get("/:id", getSingleUser)
  .post("/login", loginHandler)
  .delete("/:id", getSingleUserAndDelete)
  .put('/:id' , getSingleUserAndUpdate)


module.exports = router;
