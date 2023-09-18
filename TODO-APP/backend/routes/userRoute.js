const express = require("express");

const {
  gettingAllUsers,
  gettingOneUser,
} = require("../controllers/userController");

const authCheker = require("../middleware/authentication");
const LoginHandler = require("../controllers/authController");
const { LogOutHandler } = require("../controllers/logoutController");
const registerNewUser = require("../controllers/registerController");




const router = express.Router();
// new user regirster route
router.post("/register", registerNewUser);
router.post("/login", LoginHandler);
router.get("/logout", LogOutHandler);
router.get("/name", authCheker, gettingOneUser);
router.get("/", gettingAllUsers);

module.exports = router;
