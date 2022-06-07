const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (!products) return res.status(204).json({ message: 'No products found.' });
  res.json(products);
};

const createNewProduct = async (req, res) => {
  if (!req?.body?.title || !req?.body?.price) {
    return res.status(400).json({ message: 'title and price are required' });
  }

  try {
    const result = await Product.create({
      title: req.body.title,
      price: req.body.price,
    });

    res.status(201).json(result);
  } catch (err) {
    console.error(err);
  }
};

const updateProduct = async (req, res) => {
  if (!req?.body?.id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  const product = await Product.findOne({ _id: req.body.id }).exec();
  if (!product) {
    return res.status(204).json({ message: `No product matches ID ${req.body.id}.` });
  }
  if (req.body?.title) product.title = req.body.title;
  if (req.body?.price) product.price = req.body.price;
  const result = await product.save();
  res.json(result);
};

const deleteProduct = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ message: 'Product ID required.' });

  const product = await Product.findOne({ _id: req.body.id }).exec();
  if (!product) {
    return res.status(204).json({ message: `No product matches ID ${req.body.id}.` });
  }
  const result = await product.deleteOne(); //{ _id: req.body.id }
  res.json(result);
};

const getProduct = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ message: 'Product ID required.' });

  const product = await Product.findOne({ _id: req.params.id }).exec();
  if (!product) {
    return res.status(204).json({ message: `No product matches ID ${req.params.id}.` });
  }
  res.json(product);
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};
