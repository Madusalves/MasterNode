const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => { // standard route for handle responds to HTTP GET requests
  const products = adminData.products;
  res.render('shop', {    
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
