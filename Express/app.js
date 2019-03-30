/* created by Vikash Kumar Singh for express server*/

const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
const hostname = 'localhost';
const port = 9000;
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/add-merchant', (req, res, next) => {
    console.log(`Add Merchant !!!`);
    res.send('<!DOCTYPE html><html><body><h2> HTML Forms</h2><form action = "/merchant" method="POST">First name: <br><input type = "text" name = "merchantName"><br><br><input type = "submit" value = "Submit"></form></body></html>');
});

app.use('/merchant', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});
app.use('/', (req, res, next) => {
    console.log(`I am in another middleware!`);
    res.send('<!DOCTYPE html> <html> <head> <meta charset = "UTF-8"> <title> Title of the document </title></head> <body> <h1> Express js loaded...... </h1></body> </html>');
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//so overall express  provides functionalities which help us to write less number of lines of codes as compare to node js server creation.