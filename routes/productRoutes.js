const express = require('express');
const productRouter = express.Router();
const upload = require('../middewares/uploadImage');

const productController = require('../controller/productController');

productRouter.post('/create',upload.single('image'), productController.createProduct);
productRouter.get('/get', productController.getProducts);

module.exports = productRouter;