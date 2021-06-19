const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, 'miniproject');
        const user = await User.findOne({_id: decode._id, 'tokens.token':token});

        if(!user) {
            throw new Error()
        }
        req.token = token;
        req.user = user;
        next();
    } catch(err) {
        res.status(400).send('not auth')
    } 
}

module.exports = {auth}