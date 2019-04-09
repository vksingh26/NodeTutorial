const products = [];
exports.getAddProducts = (req, res, next) => {
    console.log(`Add Product middleware !!!`);
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
}

exports.postAddProducts = (req, res, next) => {
    console.log('request body:', req.body);
    products.push({
        title: req.body.title
    });
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    console.log(`I am in shop js!`);
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
}