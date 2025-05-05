const Cart = require('../models/cartModel');
const Product = require('../models/productModel');


const addToCart = async (req, res) => {
    try {
        console.log(req.user);
        // add to cart functionality

        const { productId, quantity } = req.body;
        const userId = req.user._id; // Assuming you have user ID from authentication middleware
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            // Create a new cart if it doesn't exist
            cart = new Cart({ userId, products: [] });
        }
        const existingProductIndex = cart.products.findIndex(
            (item) => item.productId.toString() === productId
        );
        if (existingProductIndex > -1) {
            // Product already exists in the cart, update the quantity
            cart.products[existingProductIndex].quantity ++;
        }
        else {
            // Product doesn't exist in the cart, add it
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            cart.products.push({ productId, quantity });
        }
        const newCart = await cart.save();

        
        res.status(201).json({ message: 'Product added to cart successfully', cart: newCart });
        console.log(req.body)
    } catch (error) {
        res.status(500).json({ message: 'Error adding product to cart', error });
    }
    }

  const getCart = async (req, res) => {
     try {
        const cart = await Cart.findOne({ userId: req.user._id }).populate({path:'products.productId', model: 'Product',select:'name price image -_id'});
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart', error });
    }
    }
      
    

module.exports = {
    addToCart,getCart
};

