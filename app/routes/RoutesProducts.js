const productsController = require('../controllers/productsController');
const express = require('express');
const routesProducts = express.Router();


routesProducts.route('/')
    .get(productsController.listProducts)
    .post(productsController.addProduct)

routesProducts.route('/delete/:id')
    .delete(productsController.deleteProduct)

routesProducts.route('/update/:id')
    .patch(productsController.updateProduct)

module.exports = routesProducts;