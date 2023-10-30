const express = require("express");
const router = express.Router();
const loginRateLimiter = require('../../Middleware/loginRateLimit');
const PostMaker = require('../../Controller/blog/blogMakerController')

router.post('/blog/create' ,loginRateLimiter,PostMaker )


module.exports = router 