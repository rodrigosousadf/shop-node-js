const Product = require('../models/product');

exports.getAddProductPage = (req, res, next) => {
        res.render('admin/add-product', {
                pageTitle: 'Add Product',
                path: '/admin/add-product',
                formsCSS: true,
                productCSS: true,
                activeAddProduct: true,
        });
};

exports.postAddProduct = (req, res, next) => {
        const { title } = req.body;
        const { imageUrl } = req.body;
        const { description } = req.body;
        const { price } = req.body;
        const product = new Product(title, imageUrl, description, price);
        product.save();
        res.redirect('/');
};

exports.getProducts = (req, res, next) => {
        Product.fetchAll(products => {
                res.render('admin/products', {
                        prods: products,
                        path: '/admin/products',
                        pageTitle: 'Admin Products',
                });
        });
};
