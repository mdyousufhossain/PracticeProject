const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");
const handleRefreshToken = require("../../Controller/Users/refreshTokenController");

router.get("/token", loginRateLimiter, handleRefreshToken);

module.exports = router;
