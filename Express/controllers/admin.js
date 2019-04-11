const Product = require('../models/product');

const products = [];
exports.getAddProducts = (req, res, next) => {
    console.log(`Add Product middleware !!!`);
    res.render('admin/add-product', {
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
    console.log(`I am in get product!`);
    const products = Product.fetchAll();
    res.render('admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });
}