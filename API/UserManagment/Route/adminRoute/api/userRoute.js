const MainController = require("../../../Controller/admin/userController");
const verifyRoles = require("../../../Middleware/verifyRoles");
require("dotenv").config();
const ROLES_LIST = require("../../../config/Roles_List");
const express = require("express");
const router = express.Router();
const userDb = require("../../../Model/UserModel");

const UserMainController = new MainController(userDb);

router
  .get("/alluser", verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getAllUser(res, req)
  )
  .get("/:id", verifyRoles(ROLES_LIST.User), (res, req) =>
    UserMainController.getSingleUser(res, req)
  )
  .delete("/:id", verifyRoles(ROLES_LIST.Admin), (res, req) =>
    UserMainController.getSingleUserAndDelete(res, req)
  )
  .put("/:id", verifyRoles(ROLES_LIST.User), (res, req) =>
    UserMainController.getSingleUserAndUpdate(res, req)
  );

module.exports = router;
