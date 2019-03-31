const path = require('path');
const express = require('express');

const rootDir = require('../utils/rootPath');
const routes = express.Router();

routes.get('/add-product', (req, res, next) => {
    console.log(`Add Merchant !!!`);
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
    //res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));

    //this is another way using seperate module
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

routes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;