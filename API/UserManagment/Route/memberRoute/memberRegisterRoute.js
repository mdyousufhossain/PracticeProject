const express = require("express");
const router = express.Router();
const loginRateLimiter = require("../../Middleware/loginRateLimit");
// member register handler 

const handleMemberRegister = require('../../Controller/member/memberRegisterController')

router.post('/member/register',loginRateLimiter, handleMemberRegister)

module.exports = router