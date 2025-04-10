const Product = require('../models/productModel');

const fetchProducts = async () => {
    return await Product.find();
};

module.exports = {
    fetchProducts
};