const Product = require('../models/product');

const productController = {
    async listProducts(request,h){
        const products = await Product.getAllProducts();
        return h.response(products).code(200);
    },

    async getProduct(request,h){
        const product = await Product.getProductById(request.params.id);
        if(!product){
            return h.response({ error: 'Product not found'}).code(404);
        }
        return h.response(product).code(200);
    },

    async createProduct(request,h){
        const newProduct = await Product.createProduct(request.payload);
        return h.response(newProduct).code(201);
    }
};

module.exports = productController;