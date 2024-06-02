const db = require("../db/dbConfig");

const getAllProducts = async () => {
  const products = await db.any("SELECT * FROM products");
  return products;
};

const createProduct = async (product) => {
  const createdProduct = await db.oneOrNone(
    "INSERT INTO products (product_name, product_category, price, image_url, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      product.product_name,
      product.category,
      product.price,
      product.image_url,
      product.is_favorite,
    ]
  );
  return createdProduct;
};

module.exports = {
  getAllProducts,
  createProduct,
};
