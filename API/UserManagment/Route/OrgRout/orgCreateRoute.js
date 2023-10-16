const express = require("express");
const router = express.Router();
const loginRateLimiter = require('../../Middleware/loginRateLimit');
const createController = require('../../Controller/orgenazation/createController')

router.post('/org/create',createController)

module.exports = router