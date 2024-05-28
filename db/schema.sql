DROP DATABASE IF EXISTS marketplace_db;

CREATE DATABASE marketplace_db;

\c marketplace_db

DROP TABLE IF EXISTS products;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    product_name TEXT,
    product_category TEXT,
    price DECIMAL NOT NULL,
    image_url TEXT NOT NULL,
    last_updated TIMESTAMP,
    is_favorite BOOLEAN NOT NULL
);