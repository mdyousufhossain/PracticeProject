const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");

const loginHandler = require("../../Controller/Users/loginController");

// ejs template 
router.get("/login", (req, res) => {
    res.render("login", { message: "", email: "" });
  });
  
router.post("/login", loginRateLimiter, loginHandler);

module.exports = router;
