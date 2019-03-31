const express = require('express');

const routes = express.Router();

routes.get('/add-product', (req, res, next) => {
    console.log(`Add Merchant !!!`);
    res.send('<!DOCTYPE html><html><body><h2> HTML Forms</h2><form action = "/product" method="POST">First name: <br><input type = "text" name = "merchantName"><br><br><input type = "submit" value = "Submit"></form></body></html>');
});

routes.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = routes;