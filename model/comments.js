const mongoose =require('mongoose');

const commentsSchema=new mongoose.Schema({
    author:String,
    comment:String,
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post'
    },
    created:Date
})