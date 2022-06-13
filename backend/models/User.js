const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      // required: true,
      required: [true, 'Please add a name'],
    },
    // email: {
    //   type: String,
    //   // required: true,
    //   required: [true, 'Please add a email'],
    // },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Editor: Number,
      Admin: Number,
    },
    password: {
      type: String,
      // required: true,
      required: [true, 'Please add a password'],
    },
    refreshToken: [String],
  },

  {
    timestamp: true,
  }
);

module.exports = mongoose.model('User', userSchema);


