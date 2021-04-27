const express= require('express');
const app= express();
const Blog=require('../models/blogs');
const Comment=require('../models/comments');
const {isLoggedIn}=require('../logininfo');
const moment=require('moment');

app.delete('/blogs/:id/:cmntid',async(req,res)=>{
    console.log("DELETE");
    const{id,cmntid}=req.params;
    await Blog.findByIdAndUpdate(id,{$pull:{comments:cmntid}});
    await Comment.findByIdAndDelete(cmntid);
    res.redirect(`/blogs/${req.params.id}`);
})

app.post('/blogs/:id/comment',isLoggedIn,async (req,res)=>{
const blg =await Blog.findById(req.params.id);
const {body} = req.body.comments;
const {username}=req.user;
const time=moment().format("MMM D, YYYY");
const cmnt= new Comment({body:body,username:username,time:time});
// console.log(req.body.comments);
blg.comments.push(cmnt);

await blg.save();
await cmnt.save();


res.redirect(`/blogs/${req.params.id}`);
});

module.exports=app;
