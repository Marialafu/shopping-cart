const express = require('express');
const productsController = require('../controllers/element.controller');

const productsRoutes = express.Router();

productsRoutes.patch('/:id', productsController.updateProduct);

// elementRoutes.get('/', elementController.getAllElements);
// elementRoutes.post('/', elementController.createElement);
// elementRoutes.patch('/:id', elementController.updateElement);
// elementRoutes.delete('/:id', elementController.deleteElement);

module.exports = productsRoutes;
