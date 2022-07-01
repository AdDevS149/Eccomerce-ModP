const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

router.get('/allusers', isAuthenticated, allUsers);
router.get('/user/:id', isAuthenticated, singleUser);
router.put('/admin/user/edit/:id', isAuthenticated, editUser);
//User edit own info
router.put('/user/dashboard/edit/:id', isAuthenticated, editUser);
router.delete('/admin/user/delete/:id', isAuthenticated, deleteUser);

module.exports = router;
