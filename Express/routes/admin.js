const path = require('path');
const express = require('express');

const rootDir = require('../utils/rootPath');
const routes = express.Router();

const products = [];

routes.get('/add-product', (req, res, next) => {
    console.log(`Add Product middleware !!!`);
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'}); //render is use to render pug file, first param is template name, second is the object where we can paas n number of data
});
//start working with dummy data sharing.
routes.post('/add-product', (req, res, next) => {
    console.log('request body:', req.body);
    products.push({
        title: req.body.title
    });
    res.redirect('/');
});

//module.exports = routes;

exports.routes = routes;
exports.products = products;