const express = require("express");
const handleRegister = require("./../../Controller/Users/registerController");
const router = express.Router();

router.get("/register", (req, res) => {
    res.render("register", { errors: null, name: "", email: "" });
  });
  
  // Handle registration form submission
  router.post("/register", handleRegister);

module.exports = router;
