const express = require("express");
const {
  registerUser,
  gettingAllUsers,
} = require("../controllers/userController");

const router = express.Router();
// new user regirster route
router.post("/register", registerUser);
router.get("/", gettingAllUsers);

module.exports = router;
