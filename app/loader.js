const mongooseLoader = require('./loaders/mongooseLoader');
const expressLoader = require('./loaders/expressLoader');


const loader = async(app)=>{
    try {
        await mongooseLoader();
        console.log('DB running');
        expressLoader(app)
        console.log('Express running');
    } catch (error) {
        
    }
}

module.exports = loader;
