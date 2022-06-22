// const User = require('../models/User');

// const handleLogout = async (req, res) => {
//   // On client, also delete the accessToken

//   const cookies = req.cookies;
//   if (!cookies?.jwt) return res.sendStatus(204); //No content
//   const refreshToken = cookies.jwt;

//   // Is refreshToken in db?
//   const existingUser = await User.findOne({ refreshToken }).exec();
//   if (!existingUser) {
//     res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
//     return res.sendStatus(204);
//   }

//   // Delete refreshToken in db
//   existingUser.refreshToken = existingUser.refreshToken.filter((rt) => rt !== refreshToken);
//   const result = await existingUser.save();
//   console.log(result);

//   res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
//   res.sendStatus(204);
// };

// module.exports = { handleLogout };
