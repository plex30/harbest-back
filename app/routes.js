const express = require('express');
const router = express.Router();
const routesProducts = require('./routes/RoutesProducts');


router.use('/products', routesProducts);
module.exports = router;