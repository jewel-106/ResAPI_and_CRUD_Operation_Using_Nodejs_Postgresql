const productController = require('../controllers/productController');

module.exports = [
    {
        method: 'GET',
        path:'/products',
        handler:productController.listProducts
    },
    {
        method:'GET',
        path:'/products/{id}',
        handler: productController.getProduct
    },
    {
        method:'POST',
        path:'/products',
        handler:productController.createProduct
    }
]