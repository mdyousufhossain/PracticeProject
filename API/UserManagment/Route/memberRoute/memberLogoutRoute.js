const express = require('express');
const router = express.Router();

const memberHandleLogout = require('../../Controller/member/memberLogoutController')


router.get('/member/logout' , memberHandleLogout )


module.exports = router