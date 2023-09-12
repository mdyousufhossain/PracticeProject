const express = require("express");

const {
  registerUser,
  gettingAllUsers,
  LoginHandler,
  LogOutHandler,
  gettingOneUser,
} = require("../controllers/userController");

const router = express.Router();
// new user regirster route
router.post("/register", registerUser);
router.post("/login", LoginHandler);
router.get("/logout", LogOutHandler);
router.get("/:name", gettingOneUser);
router.get("/", gettingAllUsers);

module.exports = router;
