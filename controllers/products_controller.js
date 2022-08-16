// controller is composed of Express router object, routing handled within this module, functionality no different than having within server

const express = require('express');
const router = express.Router();
// console.log('router: ', router);

// import our data here. Where we have our routes, we (controller) needs access to our data
// MODEL
const products = require('../models/product_models');
// console.log('products: ', products);

// routes

router.get('/awesome', (req, res) => {
    res.send('Products are awesome!');
});

router.get('/:productIndex', (req, res) => {
    res.send(products[req.params.productIndex]);
});

router.get('/', (req, res) => {
    res.send(products);
});

module.exports = router;