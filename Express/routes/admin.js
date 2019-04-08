const path = require('path');
const express = require('express');

const rootDir = require('../utils/rootPath');
const routes = express.Router();

const products = [];

routes.get('/add-product', (req, res, next) => {
    console.log(`Add Product middleware !!!`);
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    //this is another way using seperate module
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
//start working with dummy date sharing.
routes.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

//module.exports = routes;

exports.routes = routes;
exports.products = products;