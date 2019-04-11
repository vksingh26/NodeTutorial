const express = require('express');
const adminController = require('../controllers/admin');
const routes = express.Router();

routes.get('/add-product', adminController.getAddProducts);
routes.get('/products', adminController.getProducts);
//start working with dummy data sharing.
routes.post('/add-product', adminController.postAddProducts);

module.exports = routes;