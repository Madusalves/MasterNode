const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();
// const products = [];
// const products = adminData.products;
router.get('/', (req, res, next) => {
  const products = adminData.products;
  // console.log('shop.js', adminData.products);
  res.render('shop', {prods: products}); // object shorthand 
});

module.exports = router;
