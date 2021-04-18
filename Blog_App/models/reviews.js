const mongoose = require('mongoose');

const reviewSchema=new mongoose.Schema({
    body: {
        type: String,
        required:true
    }
})

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;