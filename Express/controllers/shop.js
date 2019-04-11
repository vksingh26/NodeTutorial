const Product = require('../models/product');
console.log(Product);
exports.getProducts = (req, res, next) => {
    console.log(`I am in shop js!`);
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Products',
        path: '/products'
    });
}

exports.getIndex = (req, res, next) => {
    console.log(`I am in get index!`);
    const products = Product.fetchAll();
    res.render('shop/index', {prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
}

exports.getCart = (req, res, next) => {
    console.log(`I am inn get cart!`);
    const products = Product.fetchAll();
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    });
} 

exports.getCheckout = (req, res, next) => {
    console.log('I am in get checkout!');
    const products = Product.fetchAll();
    res.render('shop/checkout',{
        pageTitle: 'Checkout',
        path: '/checkout'
    });
}