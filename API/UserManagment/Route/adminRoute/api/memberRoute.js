const MainController = require("../../../Controller/admin/userController");
const verifyRoles = require("../../../Middleware/verifyRoles");
require("dotenv").config();
const ROLES_LIST = require("../../../config/Roles_List");
const express = require("express");
const router = express.Router();
const member = require('../../../Model/memberModel')

const UserMainController = new MainController(member);

router
  .get("/alluser", verifyRoles(ROLES_LIST.Admin,ROLES_LIST.Editor), (res, req) =>
    UserMainController.getAllUser(res, req)
  )
  .get("/:id", verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getSingleUser(res, req)
  )
  .delete("/:id", verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getSingleUserAndDelete(res, req)
  )
  

module.exports = router;