
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
  .get("/alluser", verifyRoles(ROLES_LIST.Admin), getAlluser)
  .get("/:id",verifyRoles(ROLES_LIST.User) , getSingleUser)
  .delete("/:id", verifyRoles(ROLES_LIST.Admin), getSingleUserAndDelete)
  .put('/:id', verifyRoles(ROLES_LIST.User), getSingleUserAndUpdate)


module.exports = router;
