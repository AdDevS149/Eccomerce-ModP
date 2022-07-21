const User = require('../model/UserModel')
const brcypt = require('bcrypt')
const moment = require('moment')

const getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);
    
        res.status(200).send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        });
      } catch (error) {
        res.status(500).send(error);
      }
    }






//     if (!req?.params?.id) return res.status(400).json({ "message": 'User ID required' });
//     const user = await User.findOne({ _id: req.params.id }).exec();
//     if (!user) {
//         return res.status(204).json({ 'message': `User ID ${req.params.id} not found` });
//     }
//     res.json(user);
// }

module.exports = {
    getUser,
}