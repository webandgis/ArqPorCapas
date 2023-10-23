const Product = require('../dao/models/product.model.js'); 

function getAllProducts() {
    return Product.find().exec();
  }
  
  function createProduct(newProduct) {
    return Product.create(newProduct);
  }
  
  module.exports = {
    getAllProducts,
    createProduct
  };
