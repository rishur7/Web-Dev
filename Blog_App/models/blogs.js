const mongoose = require('mongoose');
const Comment= require('./comments');
const blogschema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    author: {
        type: String,
        required:true
    },
    img: {
        type: String,
    },
    desc: {
        type: String,
        minLength:10
    },
    comments:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'
        }
    ]

})

const Blog = mongoose.model('Blog', blogschema);

module.exports = Blog;