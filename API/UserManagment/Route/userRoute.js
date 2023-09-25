const  register  = require('../Controller/registerController')
const { getAlluser , getSingleUser } = require('../Controller/userController')
const loginHandler = require('../Controller/loginController')
require('dotenv').config();

const express = require('express')
const router = express.Router()



router.post('/register', register)
router.get('/alluser', getAlluser)
router.get('/:id', getSingleUser )
router.post('/login', loginHandler)

module.exports = router