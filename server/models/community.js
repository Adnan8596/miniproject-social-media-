const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide community name'],
        trim:true,
        unique:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    members:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

const Community = mongoose.model("Community", communitySchema);

module.exports = Community;