const productsService=require('../services/products.Services.js')
function getAllProducts(req,res){
    const products=productsService.getAllProducts()
    res.json(products)
}

function createProduct(req,res){
    const newProduct=req.body
    productsService.createProducts(newProduct)
    res.status(201).json(newProduct)
}

module.exports={
    getAllProducts,
    createProduct
}