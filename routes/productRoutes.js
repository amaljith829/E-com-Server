const express = require('express');
const productRouter = express.Router();
const upload = require('../middewares/uploadImage');
const auth = require('../middewares/userAuth');

const productController = require('../controller/productController');
const cartController = require('../controller/cartController');

productRouter.post('/create',upload.single('image'), productController.createProduct);
productRouter.get('/get', productController.getProducts);
productRouter.post('/add',auth, cartController.addToCart);
productRouter.get('/getCart',auth, cartController.getCart);


module.exports = productRouter;