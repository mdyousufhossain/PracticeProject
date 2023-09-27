const express = require('express');
const router = express.Router();

const handleRegister = require('../Controller/registerController')


router.post('/register' , handleRegister )


module.exports = router