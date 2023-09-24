const  register  = require('../Controller/registerController')
const { getAlluser } = require('../Controller/userController')
const loginHandler = require('../Controller/loginController')
require('dotenv').config();

const express = require('express')
const router = express.Router()



router.post('/register', register)
router.get('/', getAlluser)
router.post('/login', loginHandler)

module.exports = router