const Product = require('../model/Product');
// const { auth, isUser, isAdmin } = require("../middleware/auth");
const cloudinary = require('../utils/cloudinary');

// const router = require("express").Router();

//GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  const qbrand = req.query.brand;
  try {
    let products;

    if (qbrand) {
      products = await Product.find({
        brand: qbrand,
      }).sort({ _id: -1 });
    } else {
      products = await Product.find().sort({ _id: -1 });
    }

    res.status(200).send(products);
  } catch (error) {
    res.status(500).send(error);
  }
};

//CREATE
const createNewProduct = async (req, res) => {
  const { name, brand, desc, price, image } = req.body;

  try {
    if (image) {
      const uploadedResponse = await cloudinary.uploader.upload(image, {
        upload_preset: 'mod-ecom',
      });

      if (uploadedResponse) {
        const product = new Product({
          name,
          brand,
          desc,
          price,
          image: uploadedResponse,
        });

        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
  if (req.body.productImg) {
    const destroyResponse = await cloudinary.uploader.destroy(req.body.product.image.public_id);

    if (destroyResponse) {
      const uploadedResponse = await cloudinary.uploader.upload(req.body.productImg, {
        upload_preset: 'mod-ecom',
      });

      if (uploadedResponse) {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              ...req.body.product,
              image: uploadedResponse,
            },
          },
          { new: true }
        );

        res.status(200).send(updatedProduct);
      }
    }
  } else {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body.product,
        },
        { new: true }
      );
      res.status(200).send(updatedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  }
};

//DELETE
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).send('Product not found...');

    if (product.image.public_id) {
      const destroyResponse = await cloudinary.uploader.destroy(product.image.public_id);

      if (destroyResponse) {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);

        res.status(200).send(deletedProduct);
      }
    } else {
      console.log('Action terminated. Failed to deleted product image...');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

//GET SINGLE PRODUCT
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).send(product);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
  getProduct,
};

// const Product = require('../models/productModel');
// const ErrorResponse = require('../utils/errorResponse');
// const cloudinary = require('../utils/cloudinary');
// const path = require('path');

// exports.createProduct = async (req, res, next) => {
//   try {
//     // const result = await cloudinary.uploader.upload(req.file.path, {
//     //     folder: "mern",
//     //     // public_id: "product_id",
//     //     use_filename: true,
//     //     unique_filename: false

//     // });
//     const { name, description, price, countStock, avatar, category } = req.body;

//     const product = await Product.create({
//       name,
//       description,
//       price,
//       countStock,
//       category,
//       avatar,
//       // avatar: result.secure_url,
//       // cloudinary_id: result.public_id
//     });

//     res.status(200).json({
//       success: true,
//       product,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.allProducts = async (req, res, next) => {
//   // enable search
//   const keyword = req.query.keyword
//     ? {
//         name: {
//           $regex: req.query.keyword,
//           $options: 'i',
//         },
//       }
//     : {};

//   // enable pagination
//   const pageSize = 8;
//   const page = Number(req.query.pageNumber) || 1;
//   const count = await Product.find({}).estimatedDocumentCount();

//   try {
//     const products = await Product.find({ ...keyword })
//       .sort({ createdAt: -1 })
//       .populate('category')
//       .skip(pageSize * (page - 1))
//       .limit(pageSize);

//     res.status(200).json({
//       success: true,
//       products,
//       page,
//       pages: Math.ceil(count / pageSize),
//       count,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// exports.singleProduct = async (req, res, next) => {
//   try {
//     const product = await Product.findById(req.params.id).populate('category');
//     res.status(200).json({
//       success: true,
//       product,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// // // controller rating
// // exports.reviewProductController = async (req, res, next)=>{
// //     const {rating, comment} = req.body;

// //     try {
// //         const product = await Product.findById(req.params.id)
// //         if (product){
// //             const alreadyReviewed = Product.reviews.find(r=>r.user.toString() === req.user._id.toString())
// //             if(alreadyReviewed){
// //                 res.status(400).json({
// //                     message: "product already reviewed"
// //                 })

// //                 const review = {
// //                     //name: req.user.name,
// //                     rating: Number(rating),
// //                     comment,
// //                     user: req.user._id
// //                 }
// //                 product.reviews.push(review)
// //                 product.numReviews = product.reviews.length
// //                 product.rating = product.reviews.reduce((a,  c) => a + c.rating, 0 ) / product.reviews.length
// //                 await product.save()
// //                 res.status(201).json({
// //                     message: "review added"
// //                 })
// //             }
// //         }

// //         next();
// //     } catch (error) {
// //         return next(new ErrorResponse('product not found', 404));
// //     }
// // }

// // @route   POST /api/products/:id/reviews
// // @access  Private
// exports.createProductReview = async (req, res, next) => {
//   const { rating, comment } = req.body;

//   const product = await Product.findById(req.params.id);

//   if (product) {
//     const alreadyReviewed = await product.reviews.find((r) => r.user.toString() === req.user._id.toString());

//     if (alreadyReviewed) {
//       return next(new ErrorResponse('Product already reviewed', 400));
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };

//     product.reviews.push(review);

//     product.numReviews = product.reviews.length;

//     product.rating = product.reviews.reduce((acc, item) => item.rating + acc, 0) / product.reviews.length;

//     await product.save();
//     res.status(201).json({ message: 'Review added' });
//   } else {
//     res.status(404);
//     return next(new ErrorResponse('product not found', 404));
//   }
// };

// exports.editProduct = async (req, res, next) => {
//   try {
//     const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({
//       success: true,
//       product,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// exports.deleteProduct = async (req, res, next) => {
//   try {
//     const product = await Product.findByIdAndDelete(req.params.id);
//     res.status(200).json({
//       success: true,
//       message: 'Product deleted',
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };
