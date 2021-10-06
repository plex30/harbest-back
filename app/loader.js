const mongooseLoader = require('./loaders/mongooseLoader');
const expressLoader = require('./loaders/expressLoader');


async function loader(app) {

    try{
        await mongooseLoader();
        console.log('DB running');
        expressLoader(app);
        console.log('Express running');
       
    }
    catch(err){
        console.error(err.message);
        throw err;
    };

}

module.exports = loader;