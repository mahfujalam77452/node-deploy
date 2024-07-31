const express = require('express')
const productController = require('../controller/product')

const productRouter = express.Router();



productRouter.post('/',productController.createProduct)

.get('/',productController.getProducts)

.get('/:id',productController.getProduct)

.put('/:id',productController.putProduct)

.patch('/:id',productController.patchProduct)

.delete('/:id',productController.deleteProduct);

exports.productRouter = productRouter;
