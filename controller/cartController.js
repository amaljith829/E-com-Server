const Cart = require('../models/cartModel');
const Product = require('../models/productModel');


const addToCart = async (req, res) => {
    try {
        const { product, price, quantity } = req.body;
        const newCart = new Cart({ product, price, quantity });
        await newCart.save();
        res.status(201).json({ message: 'Product added to cart successfully', cart: newCart });
        console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: 'Error adding product to cart', error });
    }
    }

module.exports = {
    addToCart,
};

