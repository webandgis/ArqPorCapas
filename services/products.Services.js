const productData=require('../dao/product.data.js')


function getAllProducts(){
    return productData.getAllProducts()
}

function createProducts(newProduct){
    return productData.createProducts(newProduct)
}

module.exports={
    getAllProducts,
    createProducts
}