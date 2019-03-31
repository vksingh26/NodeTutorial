const path = require('path');
const express = require('express');
const rootDir = require('../utils/rootPath');
const routes = express.Router();

routes.get('/', (req, res, next) => {
    console.log(`I am in another middleware!`);
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
    //res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

    //this is another way using seperate module
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = routes;