const db = require("../db/dbConfig");

const getAllProducts = async () => {
  const products = await db.any("SELECT * FROM products");
  return products;
};

const getOneProduct = async (id) => {
  const product = await db.oneOrNone("SELECT * FROM products WHERE id = $1", [
    id,
  ]);
  return product;
};

const createProduct = async (product) => {
  const createdProduct = await db.oneOrNone(
    "INSERT INTO products (product_name, product_category, price, image_url, is_new) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [
      product.product_name,
      product.category,
      product.price,
      product.image_url,
      product.is_new,
    ]
  );
  return createdProduct;
};

const updateProduct = async (id, product) => {
  const { product_name, product_category, price, image_url, is_new } = product;
  const updatedProduct = await db.oneOrNone(
    `UPDATE products 
       SET product_name = $1, product_category = $2, price = $3, image_url = $4, is_new = $5 
       WHERE id = $6 
       RETURNING *`,
    [product_name, product_category, price, image_url, is_new, id]
  );
  return updatedProduct;
};

const deleteProduct = async (id) => {
  const deletedProduct = await db.oneOrNone(
    "DELETE FROM products WHERE id = $1 RETURNING *;",
    [id]
  );
  return deletedProduct;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
