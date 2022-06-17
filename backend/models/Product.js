const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  urlName: {
    type: String,
    required: [true, 'Please add an url value'],
  },

  item: {
    type: String,
    required: [true, 'Please add an item value'],
  },

  image: {
    type: String,
    required: [true, 'Please add an image'],
  },

  price: {
    type: Number,
    required: [true, 'Please add a price value'],
  },

  description: {
    type: String,
    required: [true, 'Please add a description'],
  },
  featured: {
    type: Boolean,
    required: [true, 'Indicate if featured or not'],
  },
  qty: {
    type: Number,
    // required: [true, 'Please add a number value'],
  },
  inStock: {
    type: Number,
    required: [true, 'Please amount in stock'],
  }

}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);



// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const productSchema = new Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     }
// });

// module.exports = mongoose.model('Product', productSchema);





// const mongoose = require('mongoose');

// const productSchema = mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         required: true,
//         ref: "User",
//     },
//   slug: {
//     type: String,
//     required: [true, 'Please add an url value'],
//   },

//   item: {
//     type: String,
//     required: [true, 'Please add an item value'],
//   },

// //   image: {
// //     type: String,
// //     required: [true, 'Please add an image'],
// //   },

//   price: {
//     type: Number,
//     required: [true, 'Please add a price value'],
//   },

// //   description: {
// //     type: String,
// //     required: [true, 'Please add a description'],
// //   },
// //   featured: {
// //     type: Boolean,
// //     required: [true, 'Indicate if featured or not'],
// //   },
// //   qty: {
// //     type: Number,
// //     // required: [true, 'Please add a number value'],
// //   },
// //   productInStock: {
// //     type: Number,
// //     required: [true, 'Please amount in stock'],
// //   }

// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Product', productSchema);


