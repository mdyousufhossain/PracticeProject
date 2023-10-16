const express = require('express');
const router = express.Router();

const handleLogout = require('../../Controller/admin/logoutController')


router.get('/logout' , handleLogout )


module.exports = router