const express = require('express');
const productsController = require('../controllers/products.controller');

const productsRoutes = express.Router();

productsRoutes.patch('/', productsController.updateProduct);
productsRoutes.get('/', productsController.getAllProducts);

module.exports = productsRoutes;
