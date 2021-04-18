const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seedDB');
const methodOverride = require('method-override');
const reviewRoutes = require('./routes/review');


mongoose.connect('mongodb://localhost:27017/blogApp', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open");
    })
    .catch(err => {
        console.log("DB Not Connected");
        console.log(err);
    })

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(express.static(path.join(__dirname,'/public'))); 
mongoose.set('useFindAndModify', false);
const Product = require('./models/blogs');


app.get("/", (req, res) => {
    res.render('blogs/landing');
})

app.get('/blogs', async(req, res) => {

    const blogs = await Product.find({});

    res.render('blogs/index',{blogs:blogs});
})  

app.get('/blogs/new', (req, res) => {
    res.render('blogs/new');
})

app.post('/blogs', async(req, res) => {
    const product = await Product.create(req.body)
    res.redirect("/blogs");
})


app.get('/blogs/:id', async(req, res) => {
    
    const product = await Product.findById(req.params.id);

    res.render('blogs/show',{product:product})
})


app.get('/blogs/:id/edit', async(req, res) => {
    
    const foundProduct = await Product.findById(req.params.id).populate('reviews');

    res.render('blogs/edit',{product:foundProduct})
})


app.patch('/blogs/:id', async(req, res) => {


    const updatedProduct = await Product.findOneAndUpdate({ _id: req.params.id },req.body);
   
    res.redirect('/blogs')
})

app.delete('/blogs/:id', async(req, res) => {
    
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    res.redirect('/blogs');
})

app.use(reviewRoutes)

app.listen(3000, () => {
    console.log("Server Started at localhost:3000..");
})