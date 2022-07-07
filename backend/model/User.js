const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      // minlength: 3,
      // maxlength: 30,
    },
    email: {
      type: String,
      required: true,
      // minlength: 3,
      // maxlength: 200,
      unique: true,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      DataEntry: Number,
      Admin: Number,
    },
    password: {
      type: String,
      required: true,
      // minlength: 3,
      // maxlength: 1024,
    },

    refreshToken: [String],
  },

  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);

// // const User = mongoose.model('User', userSchema);

// // exports.User = User;

// // const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;

// // const userSchema = new Schema({
// //     username: {
// //         type: String,
// //         required: true
// //     },
// //     roles: {
// //         User: {
// //             type: Number,
// //             default: 2001
// //         },
// //         Editor: Number,
// //         Admin: Number
// //     },
// //     password: {
// //         type: String,
// //         required: true
// //     },
// //     refreshToken: [String]
// // });

// // module.exports = mongoose.model('User', userSchema);
