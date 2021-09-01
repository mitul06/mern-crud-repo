const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    restname:{
        type:String,
        required:true
    },
    optime:{
        type:String,
        required:true
    },
    cltime:{
        type:String,
        required:true
    },
    restfood:{
        type:String,
        required:true
    },
})

const Restaurantdb = mongoose.model('restaurantdb', schema)
module.exports = Restaurantdb;