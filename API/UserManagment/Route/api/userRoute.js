
const {
  getAlluser,
  getSingleUser,
  getSingleUserAndDelete,
  getSingleUserAndUpdate,
} = require("../../Controller/userController");

 const verifyRoles = require('../../Middleware/verifyRoles')
 const verifyJWT = require('../../Middleware/verifyJWT')
require("dotenv").config();
const ROLES_LIST = require('../../config/Roles_List')
const express = require("express");
const router = express.Router();

router
  .get("/alluser", verifyJWT, getAlluser)
  .get("/:id", getSingleUser)
  .delete("/:id" , getSingleUserAndDelete)
  .put('/:id', getSingleUserAndUpdate)


module.exports = router;
