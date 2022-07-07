const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleLogin = async (req, res) => {
  const cookies = req.cookies;

  const { email, pwd } = req.body;
  if (!email || !pwd) return res.status(400).json({ message: 'Email and password are required.' });
  const foundUser = await User.findOne({ email: email }).exec();
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    const roles = Object.values(foundUser.roles).filter(Boolean);
    // create JWTs
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '10s' }
    );

    const newRefreshToken = jwt.sign({ username: foundUser.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15s' });

    // Changed to let keyword
    let newRefreshTokenArray = !cookies?.jwt ? foundUser.refreshToken : foundUser.refreshToken.filter((rt) => rt !== cookies.jwt);

    if (cookies?.jwt) {
      /* 
                Scenario added here: 
                    1) User logs in but never uses RT and does not logout 
                    2) RT is stolen
                    3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
                */
      const refreshToken = cookies.jwt;
      const foundToken = await User.findOne({ refreshToken }).exec();

      // Detected refresh token reuse!
      if (!foundToken) {
        // clear out ALL previous refresh tokens
        newRefreshTokenArray = [];
      }

      res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    }

    // Saving refreshToken with current user
    foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
    const result = await foundUser.save();

    // Creates Secure Cookie with refresh token
    res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

    // Send authorization roles and access token to user
    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { handleLogin };

// create JWTs
//     res.json({ success: `User ${email} is logged in!` });
//   } else {
//     res.sendStatus(401);
//   }
// };

// module.exports = { handleLogin };

// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const signin = async (req, res) => {
//   const cookies = req.cookies;

//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password are required.' });

//   const userExists = await User.findOne({ email: user }).exec();
//   if (!userExists) return res.status(401).json({ message: 'Unauthorizedddd' });

//   const match = await bcrypt.compare(password, userExists.password);
//   if (match) {
//     const roles = Object.values(userExists.roles).filter(Boolean);

//     // create JWTs
//     const accessToken = jwt.sign(
//       {
//         UserInfo: {
//           email: userExists.email,
//           roles: roles,
//         },
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: '10s' }
//     );
//     const newRefreshToken = jwt.sign({ email: userExists.email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15s' });

//     // Changed to let keyword
//     let newRefreshTokenArray = !cookies?.jwt ? userExists.refreshToken : userExists.refreshToken.filter((rft) => rft !== cookies.jwt);

//     if (cookies?.jwt) {
//       /*
//     Scenario added here:
//         1) User logs in but never uses RT and does not logout
//         2) RT is stolen
//         3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
//     */
//       const refreshToken = cookies.jwt;
//       const foundToken = await User.findOne({ refreshToken }).exec();

//       // Detected refresh token reuse!
//       if (!foundToken) {
//         // clear out ALL previous refresh tokens
//         newRefreshTokenArray = [];
//       }
//       res.clearCookie('jwt', { httpOnly: true /*sameSite: 'None',*/ /*secure: true*/ });
//     }

//     // Saving refreshToken with current user
//     foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
//     const result = await foundUser.save();

//     // Creates Secure Cookie with refresh token
//     res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

//     // Send authorization roles and access token to user
//     res.json({ accessToken });
//   } else {
//     res.sendStatus(401);
//   }
// };

// module.exports = { signin };

// // //const { findOne } = require('../models/user');
// // const User = require('../models/userModel');
// // const ErrorResponse = require('../utils/errorResponse');

// // exports.signup = async (req, res, next) => {
// //   const { name, email, password } = req.body;
// //   // if (!name){
// //   //   return  next(new ErrorResponse("name is required", 400));
// //   // }

// //   // if (!email){
// //   //   return  next(new ErrorResponse("E-mail is required", 400));
// //   // }

// //   // if (!password){
// //   //   return  next(new ErrorResponse("Password is required", 400));
// //   // }

// //   // if (password.length < 6){
// //   //   return  next(new ErrorResponse("Password must have at least six(6) characters", 400));
// //   // }

// //   const useExist = await User.findOne({ email });
// //   if (useExist) {
// //     return next(new ErrorResponse('E-mail already taken', 400));
// //   }

// //   try {
// //     const user = await User.create(req.body);
// //     res.status(201).json({
// //       success: true,
// //       user,
// //     });
// //   } catch (err) {

// //     next(err);
// //   }
// // };

// // exports.signin = async (req, res, next) => {
// //   try {
// //     const { email, password } = req.body;
// //     // validation
// //     if (!email) {
// //       return next(new ErrorResponse('Please enter an email ', 403));
// //     }
// //     if (!password) {
// //       return next(new ErrorResponse('Please enter a password', 403));
// //     }
// //     // check user email
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return next(new ErrorResponse('Invalid credentials', 400));
// //     }

// //     //check password
// //     const isMatched = await user.comparePassword(password);
// //     if (!isMatched) {
// //       return next(new ErrorResponse('Invalid credentials', 400));
// //     }
// //     // const token = await user.getJwtToken();
// //     // res.status(200).json({success: true, token});

// //     sendTokenResponse(user, 200, res);
// //   } catch (err) {
// //     next(err);
// //   }
// // };

// // const sendTokenResponse = async (user, statusCode, res) => {
// //   const token = await user.getJwtToken();

// //   const options = {
// //     httpOnly: true,
// //     // expires: new Date(Date.now() + process.env.EXPIRE_TOKEN),
// //     maxAge: 24 * 60 * 60 * 1000,
// //   };

// //   res.status(statusCode).cookie('token', token, options).json({ success: true, token, user });
// // };

// // // LOG OUT USER
// // exports.logout = (req, res, next) => {
// //   // res.cookie('token', null, {
// //   //   expires: new Date(Date.now()),
// //   //   httpOnly: true
// //   // })

// //   res.clearCookie('token');

// //   res.status(200).json({
// //     success: true,
// //     message: 'Logged out',
// //   });
// // };

// // //GET CURRENT LOG IN USER
// // exports.userProfile = async (req, res, next) => {
// //   const user = await User.findById(req.user.id);
// //   res.status(200).json({
// //     success: true,
// //     user,
// //   });
// // };

// // // const User = require('../models/userModel');
// // // const ErrorResponse = require('../utils/errorResponse');

// // // exports.signup = async (req, res, next) => {
// // //   const { email } = req.body;
// // //   const userExist = await User.findOne({ email });

// // //   if (userExist) {
// // //     return next(new ErrorResponse('E-mail already exists', 400));
// // //   }

// // //   try {
// // //     const user = await User.create(req.body);
// // //     res.status(201).json({
// // //       success: true,
// // //       user,
// // //     });
// // //   } catch (error) {
// // //     console.log(error);
// // //     next(error);
// // //   }
// // // };

// // // exports.signin = async (req, res, next) => {
// // //   try {
// // //     const { email, password } = req.body;
// // //     if (!email || !password) {
// // //       return next(new ErrorResponse('E-mail and password are required', 400));
// // //     }

// // //     // check user e-mail
// // //     const user = await User.findOne({ email });
// // //     if (!user) {
// // //       return next(new ErrorResponse('Invalid credentials', 400));
// // //     }

// // //     // verify user password
// // //     const isMatched = await user.comparePassword(password);
// // //     if (!isMatched) {
// // //       return next(new ErrorResponse('Invalid credentials', 400));
// // //     }

// // //     // generateToken(user, 200, res);

// // //     sendTokenResponse(user, 200, res);
// // //   } catch (error) {
// // //     console.log(error);

// // //     next(new ErrorResponse('Cannot log in, check your credentials', 400));
// // //   }
// // // };

// // // const sendTokenResponse = async (user, statusCode, res) => {
// // //   const token = await user.getJwtToken();

// // //   const options = {
// // //     httpOnly: true,
// // //     maxAge: 24 * 60 * 60 * 1000,
// // //     // expires: new Date(Date.now() + process.env.EXPIRE_TOKEN),
// // //   };

// // //   res.status(statusCode).cookie('token', token, options).json({ success: true, token });
// // // };

// // // //LOG OUT USER
// // // exports.logout = (req, res, next) => {
// // //   res.clearCookie('token');
// // //   res.status(200).json({
// // //     success: true,
// // //     message: 'Logged out',
// // //   });
// // // };

// // // exports.singleUser = async (req, res, next) => {
// // //   try {
// // //     const user = await User.findById(req.params.id);
// // //     res.status(200).json({
// // //       success: true,
// // //       user,
// // //     });
// // //   } catch (error) {
// // //     next(error);
// // //   }
// // // };

// // // // USER PROFILE
// // // exports.userProfile = async (req, res, next) => {
// // //   const user = await User.findById(req.user.id);
// // //   res.status(200).json({
// // //     success: true,
// // //     user,
// // //   });
// // // };

// // // // const User = require('../models/User');
// // // // const bcrypt = require('bcrypt');
// // // // const jwt = require('jsonwebtoken');

// // // // const handleLogin = async (req, res) => {
// // // //   const cookies = req.cookies;
// // // //   const { user, pwd } = req.body;
// // // //   if (!user || !pwd) return res.status(400).json({ message: 'email and password are required.' });

// // // //   const existingUser = await User.findOne({ username: user }).exec();
// // // //   if (!existingUser) return res.sendStatus(401); //Unauthorized
// // // //   // evaluate password
// // // //   const match = await bcrypt.compare(pwd, existingUser.password);
// // // //   if (match) {
// // // //     const roles = Object.values(existingUser.roles).filter(Boolean);
// // // //     // create JWTs
// // // //     const accessToken = jwt.sign(
// // // //       {
// // // //         UserInfo: {
// // // //           username: existingUser.username,
// // // //           roles: roles,
// // // //         },
// // // //       },
// // // //       process.env.ACCESS_TOKEN_SECRET,
// // // //       { expiresIn: '10s' }
// // // //     );
// // // //     const newRefreshToken = jwt.sign({ username: existingUser.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

// // // //     // Changed to let keyword
// // // //     let newRefreshTokenArray = !cookies?.jwt ? existingUser.refreshToken : existingUser.refreshToken.filter((rt) => rt !== cookies.jwt);

// // // //     if (cookies?.jwt) {
// // // //       /*
// // // //       Scenario added here:
// // // //           1) User logs in but never uses RT and does not logout
// // // //           2) RT is stolen
// // // //           3) If 1 & 2, reuse detection is needed to clear all RTs when user logs in
// // // //       */
// // // //       const refreshToken = cookies.jwt;
// // // //       const foundToken = await User.findOne({ refreshToken }).exec();

// // // //       // Detected refresh token reuse!
// // // //       if (!foundToken) {
// // // //         console.log('attempted refresh token reuse at login!');
// // // //         // clear out ALL previous refresh tokens
// // // //         newRefreshTokenArray = [];
// // // //       }

// // // //       res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
// // // //     }

// // // //     // Saving refreshToken with current user
// // // //     existingUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
// // // //     const result = await existingUser.save();
// // // //     console.log(result);
// // // //     console.log(roles);

// // // //     // Creates Secure Cookie with refresh token
// // // //     res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

// // // //     // Send authorization roles and access token to user
// // // //     res.json({ accessToken });
// // // //   } else {
// // // //     res.sendStatus(401);
// // // //   }
// // // // };

// // // // module.exports = { handleLogin };
