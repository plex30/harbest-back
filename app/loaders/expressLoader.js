const bodyParser = require('body-parser');
const router = require('../routes');

const expressLoader = (app)=>{
    app.use(bodyParser.json());
    app.use(router);

    app.use((req, res)=>{
        res.status(404).json({
            error: 'Not found'
        });
    });
}

module.exports = expressLoader;