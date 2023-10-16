const MainController = require("../../../Controller/admin/userController");
const verifyRoles = require("../../../Middleware/verifyRoles");
const verifyAdminJWT = require('../../../Middleware/verifyadmin')
require("dotenv").config();
const ROLES_LIST = require("../../../config/Roles_List");
const express = require("express");
const router = express.Router();
const userDb = require("../../../Model/UserModel");

const UserMainController = new MainController(userDb);

router
  .get("/alluser",verifyAdminJWT, verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getAllUser(res, req)
  )
  .get("/:id",verifyAdminJWT, verifyRoles(ROLES_LIST.User), (res, req) =>
    UserMainController.getSingleUser(res, req)
  )
  .delete("/:id",verifyAdminJWT, verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getSingleUserAndDelete(res, req)
  )
  .put("/:id",verifyAdminJWT, verifyRoles(ROLES_LIST.User), (res, req) =>
    UserMainController.getSingleUserAndUpdate(res, req)
  );

module.exports = router;
