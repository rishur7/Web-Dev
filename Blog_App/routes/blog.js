const express=require('express');
const app = express();
const Blog=require('../models/blogs');
const {isLoggedIn}=require('../logininfo');

app.get("/", (req, res) => {
    res.render('blogs/landing');
})

app.get('/blogs', async(req, res) => {

    const blogs = await Blog.find({});

    res.render('blogs/index',{blogs:blogs});
})  

app.get('/blogs/new',isLoggedIn, (req, res) => {
    res.render('blogs/new');
})

app.post('/blogs', async(req, res) => {
    const blog = await Blog.create(req.body)
    res.redirect("/blogs");
})


app.get('/blogs/:id', async(req, res) => {
    
    const blog = await Blog.findById(req.params.id).populate('comments'); //fetching data from comments(id) with ref to comments model

    res.render('blogs/show',{blog:blog})
})


app.get('/blogs/:id/edit', async(req, res) => {
    
    const foundblog = await Blog.findById(req.params.id);

    res.render('blogs/edit',{blog:foundblog})
})


app.patch('/blogs/:id', async(req, res) => {


    const updatedblog = await Blog.findOneAndUpdate({ _id: req.params.id },req.body);
   
    res.redirect('/blogs')
})

app.delete('/blogs/:id', async(req, res) => {
    
    const deletedblog = await Blog.findByIdAndDelete(req.params.id);

    res.redirect('/blogs');
})

module.exports=app