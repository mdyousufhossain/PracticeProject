const express = require("express");
const router = express.Router();
const loginRateLimiter = require('../../Middleware/loginRateLimit');
const memberJoinOrg = require('../../Controller/orgenazation/joinOrg')

router.get('/org/join/:id', memberJoinOrg)

module.exports = router