const productData = require('../dao/product.data.js');

function getAllProducts() {
  return productData.getAllProducts();
}

function createProduct(newProduct) {
  return productData.createProduct(newProduct);
}

module.exports = {
  getAllProducts,
  createProduct
};
