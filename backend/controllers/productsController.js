// const Product = require('../model/ProductModel');
// // const { auth, isUser, isAdmin } = require("../middleware/auth");
// const cloudinary = require('../utils/cloudinary');

// // const router = require("express").Router();

// //CREATE

// const createNewProduct = async (req, res) => {
//   const { name, brand, desc, price, image } = req.body;

//   try {
//     if (image) {
//       const uploadedResponse = await cloudinary.uploader.upload(image, {
//         upload_preset: 'mod-ecom',
//       });

//       if (uploadedResponse) {
//         const product = new Product({
//           name,
//           brand,
//           desc,
//           price,
//           image: uploadedResponse,
//         });

//         const savedProduct = await product.save();
//         res.status(200).send(savedProduct);
//       }
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send(error);
//   }
// };

// //DELETE

// const deleteProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);

//     if (!product) return res.status(404).send('Product not found...');

//     if (product.image.public_id) {
//       const destroyResponse = await cloudinary.uploader.destroy(product.image.public_id);

//       if (destroyResponse) {
//         const deletedProduct = await Product.findByIdAndDelete(req.params.id);

//         res.status(200).send(deletedProduct);
//       }
//     } else {
//       console.log('Action terminated. Failed to deleted product image...');
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// // UPDAT PRODUCT
// const updateProduct = async (req, res) => {
//   if (req.body.productImg) {
//     const destroyResponse = await cloudinary.uploader.destroy(req.body.product.image.public_id);

//     if (destroyResponse) {
//       const uploadedResponse = await cloudinary.uploader.upload(req.body.productImg, {
//         upload_preset: 'mod-ecom',
//       });

//       if (uploadedResponse) {
//         const updatedProduct = await Product.findByIdAndUpdate(
//           req.params.id,
//           {
//             $set: {
//               ...req.body.product,
//               image: uploadedResponse,
//             },
//           },
//           { new: true }
//         );

//         res.status(200).send(updatedProduct);
//       }
//     }
//   } else {
//     try {
//       const updatedProduct = await Product.findByIdAndUpdate(
//         req.params.id,
//         {
//           $set: req.body.product,
//         },
//         { new: true }
//       );
//       res.status(200).send(updatedProduct);
//     } catch (err) {
//       res.status(500).send(err);
//     }
//   }
// };

// //GET ALL PRODUCTS

// const getAllProducts = async (req, res) => {
//   const qbrand = req.query.brand;
//   try {
//     let products;

//     if (qbrand) {
//       products = await Product.find({
//         brand: qbrand,
//       }).sort({ _id: -1 });
//     } else {
//       products = await Product.find().sort({ _id: -1 });
//     }

//     res.status(200).send(products);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// //GET PRODUCT
// const getProduct = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.id);
//     res.status(200).send(product);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// module.exports = {
//   getAllProducts,
//   createNewProduct,
//   updateProduct,
//   deleteProduct,
//   getProduct,
// };

// // const Product = require('../model/Product');
// // // const { auth, isUser, isAdmin } = require("../middleware/auth");
// // const cloudinary = require('../utils/cloudinary');

// // // const router = require("express").Router();

// // //CREATE
// // const createNewProduct = async (req, res) => {
// //   const { name, desc, categories, size, color, price, inStock, isFeatured, image } = req.body;

// //   try {
// //     if (image) {
// //       const uploadedResponse = await cloudinary.uploader.upload(image, {
// //         upload_preset: 'mod-ecom',
// //       });

// //       if (uploadedResponse) {
// //         const product = new Product({
// //           name,
// //           desc,
// //           categories,
// //           size,
// //           color,
// //           price,
// //           inStock,
// //           isFeatured,
// //           image: uploadedResponse,
// //         });

// //         const savedProduct = await product.save();
// //         res.status(200).send(savedProduct);
// //       }
// //     }
// //   } catch (error) {
// //     console.log(error);
// //     res.status(500).send(error);
// //   }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// //   if (req.body.productImg) {
// //     const destroyResponse = await cloudinary.uploader.destroy(req.body.product.image.public_id);

// //     if (destroyResponse) {
// //       const uploadedResponse = await cloudinary.uploader.upload(req.body.productImg, {
// //         upload_preset: 'mod-ecom',
// //       });

// //       if (uploadedResponse) {
// //         const updatedProduct = await Product.findByIdAndUpdate(
// //           req.params.id,
// //           {
// //             $set: {
// //               ...req.body.product,
// //               image: uploadedResponse,
// //             },
// //           },
// //           { new: true }
// //         );

// //         res.status(200).send(updatedProduct);
// //       }
// //     }
// //   } else {
// //     try {
// //       const updatedProduct = await Product.findByIdAndUpdate(
// //         req.params.id,
// //         {
// //           $set: req.body.product,
// //         },
// //         { new: true }
// //       );
// //       res.status(200).send(updatedProduct);
// //     } catch (err) {
// //       res.status(500).send(err);
// //     }
// //   }
// // };

// // //DELETE
// // const deleteProduct = async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);

// //     if (!product) return res.status(404).send('Product not found...');

// //     if (product.image.public_id) {
// //       const destroyResponse = await cloudinary.uploader.destroy(product.image.public_id);

// //       if (destroyResponse) {
// //         const deletedProduct = await Product.findByIdAndDelete(req.params.id);

// //         res.status(200).send(deletedProduct);
// //       }
// //     } else {
// //       console.log('Action terminated. Failed to deleted product image...');
// //     }
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // };

// // //GET SINGLE PRODUCT
// // const getProduct = async (req, res) => {
// //   try {
// //     const product = await Product.findById(req.params.id);
// //     res.status(200).send(product);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // };

// // //GET ALL PRODUCTS
// // const getAllProducts = async (req, res) => {
// //   const qNew = req.query.new;
// //   const qCategory = req.query.category;
// //   try {
// //     let products;

// //     if (qNew) {
// //       products = await Product.find().sort({ createdAt: -1 }).limit(1);
// //     } else if (qCategory) {
// //       products = await Product.find({
// //         categories: {
// //           // if array inside of category
// //           $in: [qCategory],
// //         },
// //       });
// //     } else {
// //       products = await Product.find();
// //     }

// //     res.status(200).json(products);
// //   } catch (err) {
// //     res.status(500).json(err);
// //   }
// // };

// // module.exports = {
// //   getAllProducts,
// //   createNewProduct,
// //   updateProduct,
// //   deleteProduct,
// //   getProduct,
// // };
