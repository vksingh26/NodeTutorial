const path = require('path');
const express = require('express');
const rootDir = require('../utils/rootPath');
const adminData = require('../routes/admin');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log(`I am in shop js!`);
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    //this is another way using seperate module
    //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    console.log(`render pug files using below line of code`);
    console.log('Shop.js', adminData.products);
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'}); //this line will render data in the pug templates
});

module.exports = routes;