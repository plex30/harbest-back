const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name:{
        type: String
    },
    price:{
        type: String
    },
    farmer:{
        type: String
    },
    state:{
        type: String
    }, 
    description:{
        type: String
    }

})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;