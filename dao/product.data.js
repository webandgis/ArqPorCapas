let products=[]

module.expor={
    getAllProducts:()=>products,
    createProduct:(newProduct)=>{
        products.push(newProduct)
    }
}