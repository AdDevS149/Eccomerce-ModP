const express = require('express');
const router = express.Router();

const { signup, signin, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated /*isAdmin*/ } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/logout', logout);
router.get('/getme', isAuthenticated, userProfile);

module.exports = router;
