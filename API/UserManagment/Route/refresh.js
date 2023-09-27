const express = require('express');
const router = express.Router();

const handleRefreshToken = require('../Controller/refreshTokenController')


router.get('/token' , handleRefreshToken )


module.exports = router