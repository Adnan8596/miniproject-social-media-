const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    comment: {
        type:String,
        required:true,
        trim:true
    },
    post: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})

const Comment = mongoose.model("Comment",commentSchema);

module.exports = Comment;