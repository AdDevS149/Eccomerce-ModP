const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 150,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 1024,
    },
  },

  {
    timestamp: true,
  }
);

const User = mongoose.model('User', userSchema);

exports.User = User;

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     username: {
//       type: String,
//       // required: true,
//       required: [true, 'Please add a name'],
//     },
//     email: {
//       type: String,
//       // required: true,
//       required: [true, 'Please add a email'],
//     },
//     contact: {
//       type: Number,
//     },
//     // email: {
//     //   type: String,
//     //   // required: true,
//     //   required: [true, 'Please add a email'],
//     // },
//     roles: {
//       User: {
//         type: Number,
//         default: 2001,
//       },
//       Editor: Number,
//       Admin: Number,
//     },
//     password: {
//       type: String,
//       // required: true,
//       required: [true, 'Please add a password'],
//     },
//     refreshToken: [String],
//   },

//   {
//     timestamp: true,
//   }
// );

// module.exports = mongoose.model('User', userSchema);
