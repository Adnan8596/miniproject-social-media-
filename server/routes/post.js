const express = require('express');
const router = new express.Router();
const multer = require('multer');

const Post = require('../models/post');
const Community = require('../models/community')

const {auth} = require('../middleware/auth')

router.post('/posts',auth,async (req, res) => {
    try{
        const community = await Community.findOne({name:req.body.community});
        if(!community) {
            throw new Error('community not found');
        }
        const data = {
            ...req.body,
            owner:req.user._id,
            communityId:community._id
        }
        const newPost = new Post(data);
        const post = await newPost.save();
        res.send(post);
    }catch(err) {
        console.log(err)
    }
})
const upload = multer({
    limits:{
        fileSize:10000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.endsWith('.jpg')) {
            return cb(new Error('please upload a word document'));
        }
        cb(undefined, true)
    }
})
router.post('/posts/:id/image',auth,upload.single('image'), async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({_id:req.params.id},{$set:{image:req.file.buffer}},{new:true});
        res.send(post)
    }catch(err) {
        console.log(err)
    }
},(err,req,res,next) => {
    res.status(400).send({err:err.message});
})
router.get('/posts/:id/image', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        res.set('Content-Type', 'image/jpg');
        res.send(post.image)
    }catch(err) {
        console.log(err)
    }
})
router.get('/posts',auth,async (req, res) => {
    try {
        const posts = await Post.find({community: {$in:[...req.user.joinedcommunity]}},{image:0}).sort({$natural:-1}).populate('owner').exec();
        res.send(posts) 
    }catch(err) {
        console.log(err)
    }
})
router.post('/posts/:id/like',auth, async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate({_id:req.params.id},{$push:{likes:req.user._id}},{new:true}).select('-image').populate('owner').exec();
        res.send(post);
    }catch(err) {
        res.status(400).send(err)
        console.log(err)
    }
})
module.exports = router;