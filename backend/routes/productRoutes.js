const express = require('express');
const router = express.Router();
const { getProducts, setProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

// const { protect } = require('../middleware/authMiddleware')

// router.route('/').get(protect, getProducts).post(protect, setProduct)
// router.route('/:id').delete(protect, deleteProduct).put(protect, updateProduct)
router.route('/').get(getProducts).post(setProduct)
router.route('/:id').delete(deleteProduct).put(updateProduct)

module.exports = router;


