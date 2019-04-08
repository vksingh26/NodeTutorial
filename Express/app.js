/* created by Vikash Kumar Singh for express server*/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.set('view engine', 'pug'); //here we are telling express that we want to compile dynamic template with pug engine 
app.set('views', 'views'); //this tells about the location where the engine need to look into, currently here its views folder

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');
const hostname = 'localhost';
const port = 9000;
app.use(bodyParser.urlencoded({
    extended: false
}));

//this is the way to access static files, public is nothing but a folder containing static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRouter);

// handle error

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
});


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});