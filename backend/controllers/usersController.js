
const User = require('../model/User');

const getAllUsers = async (req, res) => {
    const users = await User.find();
    if (!users) return res.status(204).json({ 'message': 'No users found' });
    res.json(users);
}

const deleteUser = async (req, res) => {
    if (!req?.body?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.body.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.body.id} not found` });
    }
    const result = await user.deleteOne({ _id: req.body.id });
    res.json(result);
}

const getUser = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
    const user = await User.findOne({ _id: req.params.id }).exec();
    if (!user) {
        return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
    }
    res.json(user);
}

module.exports = {
    getAllUsers,
    deleteUser,
    getUser
}








// const User = require('../models/userModel');
// const ErrorResponse = require('../utils/errorResponse');

// //load all users
// exports.allUsers = async (req, res, next) => {
//   const pageSize = 5;
//   const page = Number(req.query.pageNumber) || 1;
//   const count = await User.find({}).estimatedDocumentCount();

//   try {
//     const users = await User.find()
//       .sort({ createdAt: -1 })
//       .skip(pageSize * (page - 1))
//       .limit(pageSize);

//     res.status(200).json({
//       success: true,
//       users,
//       page,
//       pages: Math.ceil(count / pageSize),
//       count,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// //edit single user
// exports.singleUser = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     res.status(200).json({
//       success: true,
//       user,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// //edit user
// exports.editUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json({
//       success: true,
//       user,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };

// //delete user
// exports.deleteUser = async (req, res, next) => {
//   try {
//     const user = await User.findByIdAndRemove(req.params.id, req.body);
//     res.status(200).json({
//       success: true,
//       user,
//     });
//     next();
//   } catch (error) {
//     return next(new ErrorResponse('Server error', 500));
//   }
// };
