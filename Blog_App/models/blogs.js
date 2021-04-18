const mongoose = require('mongoose');
const Review= require('./reviews');
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
    reviews:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Review'
        }
    ]

})

const Product = mongoose.model('Product', blogschema);

module.exports = Product;