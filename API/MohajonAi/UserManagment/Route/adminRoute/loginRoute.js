const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");

const loginHandler = require("../../Controller/admin/loginController");

router.post("/login", loginRateLimiter, loginHandler);

module.exports = router;
