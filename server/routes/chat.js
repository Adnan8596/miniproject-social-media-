const express = require('express');
const router = new express.Router();

const Community = require('../models/community');
const User = require('../models/user')

router.get('/community/:name/:user/chat', async (req, res) => {
    try {
        const community = await Community.findOne({name:req.params.name});
        const user = await User.findById(req.params.user);
        res.render('communitychat',{id:community._id,username:user.name})
    }catch(err) {
        console.log(err);
    }
})
module.exports = router;