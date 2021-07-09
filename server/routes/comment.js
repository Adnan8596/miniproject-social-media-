const express = require('express');
const router = new express.Router();

const Comment = require('../models/comment');
const {auth} = require('../middleware/auth')

router.post('/comment/:postid',auth, async (req, res) => {
    try {
        const data = {
            comment:req.body.comment,
            post:req.params.postid,
            owner:req.user._id
        }
        const comment = await Comment.create(data);
        await comment.populate("owner").execPopulate();
        res.send(comment)
    } catch(err) {
        res.status(400).send();
        console.log(err)
    }
})


module.exports = router