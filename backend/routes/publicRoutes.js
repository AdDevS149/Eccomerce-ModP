const express = require('express');
const router = express.Router();
const logoutController = require('../controllers/logoutController');
// const authController = require('../controllers/authController');
// // const productsController = require('../controllers/productsController')
const publicRoutesController = require('../controllers/publicRoutesController');

//Auth
router.post('/login', publicRoutesController.handleLogin);
router.post('/register', publicRoutesController.handleNewUser);

//Products
// router.get('/products', publicRoutesController.getAllProducts);
// router.get('/product/:id', publicRoutesController.getProduct);

router.get('/logout', logoutController.handleLogout);

module.exports = router;
