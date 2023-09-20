const express = require('express')
const router = express.Router()
const { register } = require('../Controller/registerController')
const { getAlluser } = require('../Controller/userController')


router.post('/register', register)
router.get('/', getAlluser)

module.exports = router