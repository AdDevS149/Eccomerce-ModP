const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  const products = await Product.find();
  if (!products) return res.status(204).json({ message: 'No products found.' });
  res.json(products);
};

const createNewProduct = async (req, res) => {
  if (!req?.body?.urlName || !req?.body?.item || !req?.body?.image || !req?.body?.price || !req?.body?.description || !req?.body?.featured || !req?.body?.qty || !req?.body?.inStock) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const result = await Product.create({
      urlName: req.body.urlName,
      item: req.body.item,
      image: req.body.image,
      price: req.body.price,
      description: req.body.description,
      featured: req.body.featured,
      qty: req.body.qty,
      inStock: req.body.inStock,
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
  if (req.body?.urlName) product.urlName = req.body.urlName;
  if (req.body?.item) product.item = req.body.item;
  if (req.body?.image) product.image = req.body.image;
  if (req.body?.price) product.price = req.body.price;
  if (req.body?.description) product.description = req.body.description;
  if (req.body?.featured) product.featured = req.body.featured;
  if (req.body?.qty) product.qty = req.body.qty;
  if (req.body?.inStock) product.inStock = req.body.inStock;
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
