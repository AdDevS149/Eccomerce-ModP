const jwt = require('jsonwebtoken');

// whenever this function is called we will get the token
const generateAuthToken = (user) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  const token = jwt.sign(
    {
      // enter parameter to hold the secret key
      _id: user._id,
      name: user.name,
      email: user.email,
    },
    secretKey
  );
  return token;
};

module.exports = generateAuthToken;
