const express = require('express');
const router = express.Router();

const loginHandler = require('../Controller/loginController')


router.post('/login' , loginHandler )


module.exports = router