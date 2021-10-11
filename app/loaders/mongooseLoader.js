const mongoose = require('mongoose');
const config = require('../config');

const conecction = async()=>{
    mongoose.connect(config.db.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        
    });
}

module.exports = conecction;