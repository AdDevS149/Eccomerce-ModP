const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const orderController = require('../controllers/orderController');
// const productsController = require('../controllers/productsController');

// Admin User Routes
router.get('/users', /*isAdmin, */ adminController.getAllUsers);
router.get('/user/find/:id', adminController.getUser);
router.put('/user/:id', adminController.updateUser);
router.delete('/user/:id', /*isAdmin, */ adminController.deleteUser);

// Admin Product Routes
router.post('/products', adminController.createNewProduct);
router.get('/products', /*isAdmin, */ adminController.getAdminProducts);
router.get('/get/product/:id', adminController.getAdminProduct);
router.put('/product/:id', adminController.updatedProduct);
router.delete('/product/:id', /*isAdmin, */ adminController.deleteProduct);

// router.route('/:id').get(adminController.getAdminProduct);

// Admin Order Routes
router.put('/:id', /*isAdmin, */ orderController.updateOrder);
router.delete('/:id', /*isAdmin, */ orderController.deleteOrder);
router.get('/', /*isAdmin, */ orderController.getAllOrders);
router.get('/stats', /*isAdmin,*/ orderController.getOrderStats);
router.get('/income', /*isAdmin,*/ orderController.getIncome);
router.get('/week-sales', /*isAdmin,*/ orderController.getWeekSales);

module.exports = router;

// check if user logged, then to next middleware,
