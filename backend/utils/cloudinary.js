const dotenv = require("dotenv");
const cloudinaryModule = require("cloudinary");

dotenv.config();
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = cloudinary;




// const dotenv = require("dotenv");
// const cloudinaryModule = require("cloudinary");



// const dotenv = require('dotenv')



// const cloudinary = require('cloudinary').v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_KEY_SECRET,
// });

// module.exports = cloudinary;

// const dotenv = require('dotenv');

// // const cloudinary = require('cloudinary').v2;

// // cloudinary.config({
// //     cloud_name: process.env.CLOUD_NAME,
// //     api_key: process.env.CLOUD_KEY,
// //     api_secret: process.env.CLOUD_KEY_SECRET
// //   });

// //   module.exports= cloudinary;

// // // https://cloudinary.com/

// // const dotenv = require("dotenv");
// // const cloudinaryModule = require("cloudinary");

// // dotenv.config();
// // const cloudinary = cloudinaryModule.v2;

// // cloudinary.config({
// //   cloud_name: process.env.CLOUDINARY_NAME,
// //   api_key: process.env.CLOUDINARY_API_KEY,
// //   api_secret: process.env.CLOUDINARY_API_SECRET,
// // });

// // module.exports = cloudinary;
