const Product = require('../models/product');
console.log(Product);


const products = [];
exports.getAddProducts = (req, res, next) => {
    console.log(`Add Product middleware !!!`);
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    console.log(`I am in shop js!`);
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
}