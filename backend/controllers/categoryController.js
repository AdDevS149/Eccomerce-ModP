const Category = require('../models/categoryModel');
const ErrorResponse = require('../utils/errorResponse');

exports.create = async (req, res, next) => {
  try {
    //const cookie = req.cookies['token'];
    const category = await Category.create(req.body);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    next(err);
  }
};

//display categories
exports.allCategories = async (req, res, next) => {
  try {
    //const cookie = req.cookies['token'];
    // const categories = await Category.find().sort({createdAt: -1});
    const categories = await Category.find();
    res.status(200).json({
      success: true,
      categories,
    });
  } catch (err) {
    next(err);
  }
};

//delete category
exports.deleteCategory = async (req, res, next) => {
  try {
    //const cookie = req.cookies['token'];
    const category = await Category.findByIdAndRemove(req.params.id);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    next(err);
  }
};

//update category
exports.updateCategory = async (req, res, next) => {
  try {
    //const cookie = req.cookies['token'];
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    next(err);
  }
};

//show single category
exports.singleCategory = async (req, res, next) => {
  try {
    //const cookie = req.cookies['token'];
    const category = await Category.findById(req.params.id);
    res.status(200).json({
      success: true,
      category,
    });
  } catch (err) {
    next(err);
  }
};
