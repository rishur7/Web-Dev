const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seedDB');
const methodOverride = require('method-override');
const commentRoutes = require('./routes/comment');
const blogRoutes = require('./routes/blog');
const authRoutes = require('./routes/auth');
const Blog = require('./models/blogs');
const session= require('express-session');
const passport=require('passport');
const User = require('./models/user');
const LocalStrategy=require('passport-local');
const moment=require('moment');


mongoose.connect('mongodb://localhost:27017/blogApp', { useNewUrlParser: true, useUnifiedTopology: true ,useCreateIndex:true})
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

app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: true
  }))

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.currentUser=req.user;
    res.locals.checklogin=req.isAuthenticated();
    next();
})
app.use(blogRoutes)
app.use(commentRoutes)
app.use(authRoutes)

app.listen(3000, () => {
    console.log("Server Started at localhost:3000..");
})