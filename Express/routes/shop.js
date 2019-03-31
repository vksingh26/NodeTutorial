const express = require('express');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log(`I am in another middleware!`);
    res.send('<!DOCTYPE html> <html> <head> <meta charset = "UTF-8"> <title> Title of the document </title></head> <body> <h1> Express js loaded...... </h1></body> </html>');
});

module.exports = routes;