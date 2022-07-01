const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorResponse = require('../utils/errorResponse');

// check if user is authenticated
exports.isAuthenticated = async (req, res, next) => {
  // Extracting the token (contains userInfo) from the cookie that it was added to
  const { token } = req.cookies;

  // make sure token exists
  if (!token) {
    return next(new ErrorResponse('Logged in required for this page access', 401));
  }

  try {
    //verify token

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // token contains id of currently logged in user
    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    return next(new ErrorResponse('You must log in to access this resource', 401));
  }
};

// admin middleware
exports.isAdmin = (req, res, next) => {
  if (req.user.role === 0) {
    return next(new ErrorResponse('Access denied, you must be an admin', 401));
  }
  next();
};

// const jwt = require('jsonwebtoken');
// require('dotenv').config();

// function auth(req, res, next) {
//   const token = req.header('x-auth-token');
//   if (!token) return res.status(401).send('Access denied. Not authorized...');
//   try {
//     const jwtSecretKey = process.env.JWT_SECRET_KEY;
//     const decoded = jwt.verify(token, jwtSecretKey);
//     req.user = decoded;
//     next();
//   } catch (ex) {
//     res.status(400).send('Invalid auth token...');
//   }
// }

// module.exports = auth;
