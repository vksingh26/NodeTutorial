/* created by Vikash Kumar Singh for express server*/

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const hostname = 'localhost';
const port = 9000;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(adminRouter);
app.use(shopRouter);

// handle error

app.use((req, res, next) => {
    res.status(404).send('<!DOCTYPE html> <html> <head> <meta charset = "UTF-8"> <title> Title of the document </title></head> <body> <h1> Page not found !!!</h1></body> </html>');
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});