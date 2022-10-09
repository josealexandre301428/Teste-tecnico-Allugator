const { Router } = require('express');
const productController = require('../controller/productController');

const productRouter = Router();

productRouter.get('/', productController.getAll);
productRouter.get('/one', productController.getByName);

module.exports = productRouter;