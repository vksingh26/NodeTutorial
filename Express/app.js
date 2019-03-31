/* created by Vikash Kumar Singh for express server*/

const path = require('path');
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

//this is the way to access static files, public is nothing but a folder containing static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

// handle error

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); 
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});