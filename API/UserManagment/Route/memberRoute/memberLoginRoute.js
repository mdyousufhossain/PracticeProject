const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");

const loginHandler = require("../../Controller/member/memberLoginController");

router.post("/member/login", loginRateLimiter, loginHandler);

module.exports = router;