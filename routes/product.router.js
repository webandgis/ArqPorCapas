const express=require('express')
const router=express.Router()
const productController=require('../controllers/producto.controller.js')

//Methods

router.get("/",
productController.getAllProducts
)

router.post("/",
productController.createProduct
)

module.exports=router