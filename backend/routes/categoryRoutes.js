const express = require('express');
const router = express.Router();

const { create, allCategories, deleteCategory, updateCategory, singleCategory } = require('../controllers/categoryController');
const { isAuthenticated, isAdmin } = require('../middleware/authMiddleware');

//ROUTES    /API/V1/CATEGORY/CREATE  (EX:)
// router.post("/category/create", isAuthenticated, isAdmin, create);
// router.get("/category/all",  isAuthenticated, isAdmin, allCategories);
// router.delete("/category/delete/:id",  isAuthenticated, isAdmin,  deleteCategory);
// router.put("/product/category/update/:id", isAuthenticated, isAdmin,  updateCategory);
// router.get("/product/category/show/:id", singleCategory);

module.exports = router;
