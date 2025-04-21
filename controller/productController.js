const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = new Product({ name, description, price, stock,image:req.file.path });
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
}

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
}

module.exports = {
  createProduct,
  getProducts
};
