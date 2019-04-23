/* created by Vikash Kumar Singh for express server*/

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();
app.set('view engine', 'pug'); //here we are telling express that we want to compile dynamic template with pug engine 
app.set('views', 'views'); //this tells about the location where the engine need to look into, currently here its views folder

const adminRouter = require('./routes/admin_using_controller');
const shopRouter = require('./routes/shop_using_controller');
// const errorController = require('./controllers/error');

const mongoConnect = require('./utils/database').mongoConnect;
const hostname = 'localhost';
const port = 9000;
app.use(bodyParser.urlencoded({
    extended: false
}));

//this is the way to access static files, public is nothing but a folder containing static files
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    next();
});


app.use('/admin', adminRouter);
app.use(shopRouter);

// handle error

//app.use(errorController.get404);


// app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });

mongoConnect(() => {
    app.listen(3000);
})