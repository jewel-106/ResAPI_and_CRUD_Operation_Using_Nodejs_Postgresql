const db = require('../config/db');

const Product = {
    async getAllProducts(){
        const result = await db.query('SELECT * FROM products');
        return result.rows;
    },
    async getProductById(id){
        const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
        return result.rows[0];
    },

    async createProduct(data){
        const { name,description,price,stock } = data;
        const result = await db.query('INSERT INTO products (name,description,price,stock) VALUES ($1,$2,$3,$4) RETURNING *',
            [name,description,price,stock]
        );
        return result.rows[0];
    }
};

module.exports = Product;