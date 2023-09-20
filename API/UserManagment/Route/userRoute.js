const  register  = require('../Controller/registerController')
const { getAlluser } = require('../Controller/userController')

const express = require('express')
const router = express.Router()



router.post('/register', register)
router.get('/', getAlluser)

module.exports = router