const express = require('express')
const userController = require('../controller/user')

const userRouter = express.Router();



userRouter.post('/',userController.createProduct)

.get('/',userController.getProducts)

.get('/:id',userController.getProduct)

.put('/:id',userController.putProduct)

.patch('/:id',userController.patchProduct)

.delete('/:id',userController.deleteProduct);

exports.userRouter = userRouter;
