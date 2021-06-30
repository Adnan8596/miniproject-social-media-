const express = require('express');
const router = new express.Router();

const Community = require('../models/community');
// const User = require('../models/user');

const {auth} = require('../middleware/auth')

router.post('/community',auth, async (req, res) => {
    const data = {
        ...req.body,
        owner:req.user._id,
        members:[req.user._id]
    }
    try {
        const newCommunity = new Community(data);
        const community = await newCommunity.save();
        req.user.joinedcommunity.push(community.name);
        await req.user.save();
        res.send(community);
    }catch(err) {
        console.log(err)
        res.status(400).send({
            err:true,
            errMsg:err
        })
    }
})
router.post('/community/:id/join',auth,async (req, res) => {
    console.log(req.params.id)
    try {
        const community = await Community.findOneAndUpdate({
            name:req.params.id
        },{
            $push:{members:req.user._id}
        },{returnNewDocument:true})
        req.user.joinedcommunity.push(community.name);
        await req.user.save();
        const updateCommunity = await Community.findById(community._id)
        res.send(updateCommunity);
    }catch(err) {
        console.log(err)
    }
})
module.exports = router;