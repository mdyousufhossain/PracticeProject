const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const token = req.headers.authorization || req.headers.Authorization;

    if (!token?.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    jwt.verify(token.split(' ')[1], process.env.ACCESS_TOKEN_SECRET_1, (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err , decoded);
            return res.status(403).json({ error: 'Invalid token' });
        }

        // Token is valid, set user information in the request object
        req.email = decoded.email;
        req.userid = decoded.userid;
        next();
    });
};

module.exports = verifyJWT;
