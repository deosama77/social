const mongoose =require('mongoose');

const postSchema=new mongoose.Schema({
    author:String,
    avaliability:{
        type :String,
        enum : ['public','private','group'],
        default: 'public'
    },
    image : String,
    document:String,
    video : String,
    article:String,
    title : String,
    body  : String,
    likes:[
       { type:mongoose.Schema.Types.ObjectId,
        ref:'User'}
    ]
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'}],
    created:Date

})