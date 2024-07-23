// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const cookieParser = require('cookie-parser');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  // Extract the token
  const token = authHeader.split(' ')[1];

  // Verify the token
  jwt.verify(token, config.jwtSecret, (err, user) => {
    if (err) return res.status(403).json({ msg: 'Invalid token' });

    req.user = user; // Attach the user info to the request
    next();
  });
};

module.exports = authMiddleware;
