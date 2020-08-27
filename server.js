const express=require('express');

const app=express();

app.use('/',function(){
    console.log('it works');
})

//  new updated ....

app.listen('3000',function(){
    console.log("Port 3000 it works ");
})