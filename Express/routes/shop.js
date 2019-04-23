const path = require('path');
const express = require('express');
const rootDir = require('../utils/rootPath');
const adminData = require('../routes/admin');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
});

module.exports = routes;