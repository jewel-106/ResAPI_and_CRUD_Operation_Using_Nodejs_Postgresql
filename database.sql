CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT,
  price DECIMAL(10, 2),
  stock INTEGER
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  total_amount DECIMAL(10, 2)
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  price DECIMAL(10, 2)
);
