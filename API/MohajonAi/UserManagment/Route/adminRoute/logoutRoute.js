const express = require('express');
const router = express.Router();

const handleLogout = require('../../Controller/Users/logoutController')


router.get('/logout' , handleLogout )


module.exports = router