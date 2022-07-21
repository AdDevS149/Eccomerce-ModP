const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    brand: { type: String, required: true },
    desc: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Object, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// image: { type: Object, required: true },
// const productSchema = new Schema(
//   {
//     name: { type: String, required: true },
//     desc: { type: String, required: true },
//     categories: { type: Array },
//     size: { type: Array },
//     color: { type: Array },
//     price: { type: Number, required: true },
//     inStock: { type: Boolean, default: true },
//     isFeatured: { type: Boolean, default: false },
//     // brand: { type: String, required: true },
//     image: { type: Object, /*required: true */},
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model('Product', productSchema);
