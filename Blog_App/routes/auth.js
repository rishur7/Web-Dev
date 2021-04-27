const express=require('express');
const router=express.Router();
const passport=require('passport');
const User=require('../models/user');

router.get('/register',(req,res)=>{
    res.render('auths/auth')
})

router.post('/register',async(req,res)=>{
const user={
    username: req.body.username,
    email: req.body.email
}

const newUser=await User.register(user,req.body.password);
res.redirect('/login');
})

router.get('/login',(req,res)=>{
    res.render('auths/login');
})

router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),(req,res)=>{
res.redirect('/blogs');
console.log("Login Successfully");
})

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})
module.exports=router;