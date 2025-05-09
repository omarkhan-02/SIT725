const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
    try {
        const products = await productService.fetchProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
};

module.exports = {
    getAllProducts
};