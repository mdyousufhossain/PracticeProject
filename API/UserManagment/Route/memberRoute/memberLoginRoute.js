const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");

const memberLoginHandler = require("../../Controller/member/memberLoginController");

router.post("/member/login", loginRateLimiter, memberLoginHandler);

module.exports = router;