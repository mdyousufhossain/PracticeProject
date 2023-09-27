
const {
  getAlluser,
  getSingleUser,
  getSingleUserAndDelete,
  getSingleUserAndUpdate,
} = require("../../Controller/userController");

require("dotenv").config();

const express = require("express");
const router = express.Router();

router
  .get("/alluser", getAlluser)
  .get("/:id", getSingleUser)
  .delete("/:id", getSingleUserAndDelete)
  .put('/:id' , getSingleUserAndUpdate)


module.exports = router;
