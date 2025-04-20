const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []; //Array to store products

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product', 
    path: '/admin/add-product',
    activeAddProduct: true,
    productCSS: true
  });
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //sendFile is used to send a file
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title }); //req.body added to get the data from the form
  // console.log(req.body);
  res.redirect('/');
});

module.exports = {
  routes: router,
  products: products
};
