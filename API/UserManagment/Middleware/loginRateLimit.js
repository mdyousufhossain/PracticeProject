const rateLimit = require('express-rate-limit');

const loginRateLimiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 login attempts per windowMs
    message: 'Too many login attempts, please try again later.',
  });

module.exports = loginRateLimiter