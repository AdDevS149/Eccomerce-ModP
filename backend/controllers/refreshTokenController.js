// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// const handleRefreshToken = async (req, res) => {
//   const cookies = req.cookies;
//   if (!cookies?.jwt) return res.sendStatus(401);
//   const refreshToken = cookies.jwt;
//   res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });

//   const existingUser = await User.findOne({ refreshToken }).exec();

//   // Detected refresh token reuse
//   if (existingUser) {
//     jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
//       if (err) return res.sendStatus(403);
//       console.log('attempte refresh token reuse!');
//       const hackedUser = await User.findOne({ username: decoded.username }).exec();
//       hackedUser.refreshToken = [];
//       const result = await hackedUser.save();
//       console.log(result);
//     });
//     // if (!existingUser) return res.sendStatus(403); //Forbidden
//     return res.sendStatus(403);
//   }

//   const newRefreshTokenArray = existingUser.refreshToken.filter((rt) => rt !== refreshToken);

//   // evaluate jwt
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, async (err, decoded) => {
//     if (err) {
//       existingUser.refreshToken = [...newRefreshTokenArray];
//       const result = await existingUser.save();
//     }
//     if (err || existingUser.username !== decoded.username) return res.sendStatus(403);

//     // refresh token was still valid
//     const roles = Object.values(existingUser.roles);
//     const accessToken = jwt.sign(
//       {
//         UserInfo: {
//           username: decoded.username,
//           roles: roles,
//         },
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       { expiresIn: '30s' }
//     );

//     const newRefreshToken = jwt.sign({ username: existingUser.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

//     // Saving refreshToken with current user
//     existingUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
//     const result = await existingUser.save();

//     // Creates Secure Cookie with refresh token
//     res.cookie('jwt', newRefreshToken, { httpOnly: true, secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

//     res.json({ accessToken });
//   });
// };

// module.exports = { handleRefreshToken };
