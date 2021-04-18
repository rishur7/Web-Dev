const mongoose = require('mongoose');
const Product = require('./models/blogs');
const arr = [
    {
        name: 'My City',
        author:'Rishabh Srivastava',
        img:'https://i.pinimg.com/originals/f1/b4/d8/f1b4d8b97c237d3d03da0c5c32fa416b.jpg',
        desc:"My favorite city is Toronto; it is a great city for three reasons which are is to live, work, and for tourism. The first reason is that Toronto is great city to live. It is quiet, clean and safe city to live in."
    },
    {
        name: 'Stadium Experience',
        author:'Cristiano Ronaldo',
        img:'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1200,h_630,f_auto/w_80,x_15,y_15,g_south_west,l_klook_water/activities/rgphujiwcbg9fsqjpz60/Real%20Madrid%20Santiago%20Bernab%C3%A9u%20Stadium%20&%20Museum%20Entrance%20Ticket%20in%20Madrid.jpg',
        desc:"The Santiago Bernabéu Stadium is a football stadium in Madrid, Spain. With a current seating capacity of 81,044, it has been the home stadium of Real Madrid since its completion in 1947."
    },
    {
        name: 'My Bike',
        author:'Conor Mcgregor',
        img:'https://www.indiacarnews.com/wp-content/uploads/2021/02/2021-Suzuki-Hayabusa-Exhaust-Sound.jpg',
        desc:"The Suzuki GSX1300R Hayabusa is a sport bike motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle, with a top speed of 303 to 312"
    },

]

function seedDB() {
    Product.insertMany(arr)
    .then(() => {
        console.log("DATA INSERTED");
    })
    .catch((err) => {
        console.log(err);
    })
}

module.exports = seedDB;