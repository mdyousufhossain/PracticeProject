const express = require('express');
const router = express.Router();

const handleLogout = require('../Controller/logoutController')


router.get('/logout' , handleLogout )


module.exports = router