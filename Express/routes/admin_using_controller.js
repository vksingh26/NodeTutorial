const express = require('express');
const productController = require('../controllers/products');
const routes = express.Router();

routes.get('/add-product', productController.getAddProducts);
//start working with dummy data sharing.
routes.post('/add-product', productController.postAddProducts);

module.exports = routes;