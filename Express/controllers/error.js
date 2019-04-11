exports.get404 = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path: '/404'
    })
    //this is one way of adding path using dirname, another one is like we can create it in a seperate module
}