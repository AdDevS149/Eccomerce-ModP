const User = require('../model/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
  const { user, email, pwd } = req.body;
  if (!user || !email || !pwd) return res.status(400).json({ message: 'Name, email and password are required.' });
  // check for duplicate emails in the db

  const duplicate = await User.findOne({ email: email }).exec();

  if (duplicate) return res.sendStatus(409); //Conflict
  try {
    //encrypt the password
    const hashedPwd = await bcrypt.hash(pwd, 10);
    //store the new user
    const result = await User.create({
      username: user,
      email: email,
      password: hashedPwd,
    });

    console.log(result);

    res.status(201).json({ success: `New user ${user} created!` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { handleNewUser };

// const User = require('../models/User');
// const bcrypt = require('bcryptjs');

// const register = async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) return res.status(400).json({ message: 'Name, email and password are required.' });

//   // check for duplicate emails in the db
//   const duplicate = await User.findOne({ email: email }).exec();
//   if (duplicate) return res.sendStatus(409); //Conflict

//   try {
//     //encrypt the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     //create and store the new user
//     const result = await User.create({
//       name: name,
//       user: email,
//       password: hashedPassword,
//     });

//     console.log(result);

//     res.status(201).json({ success: `New user ${user} created!` });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = { register };
