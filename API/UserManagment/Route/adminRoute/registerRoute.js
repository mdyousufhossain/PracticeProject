const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");
const handleRegister = require("../../Controller/admin/registerController");

router.post("/register", loginRateLimiter, handleRegister);

module.exports = router;
