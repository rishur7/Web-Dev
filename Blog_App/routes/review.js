const express=require('express');
const app = express();
const Blogs=require('../models/blogs');
const Review=require('../models/reviews');

app.post('/blogs/:id/review',async(req,res)=>{
    const blogs=await Blogs.findById(req.params.id);
    const review=new Review(req.body.review);
    blogs.reviews.push(review);
    
    await review.save();
    await blogs.save();

    res.redirect(`/blogs/${req.params.id}`);
});

module.exports=app;