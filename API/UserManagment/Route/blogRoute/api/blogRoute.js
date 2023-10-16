const express = require("express");
const router = express.Router();
const loginRateLimiter = require('../../../Middleware/loginRateLimit');

const findPostsCreatedByUser = require('../../../Controller/blog/blogController')

router.get('/blog/posts',  findPostsCreatedByUser )


module.exports = router 