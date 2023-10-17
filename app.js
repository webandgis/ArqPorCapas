const express=require('express')
const mongoose = require('mongoose');
const bodyParser=require('body-parser')

const app=express()

const PORT=8010

mongoose.connect('mongodb+srv://girmar14:d1CYrI8pl75TyQw5@e-commerce.s0glbx3.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//Middleware
app.use(bodyParser.json())

//Rutas de routes user-products

const userRoutes=require('./routes/user.router.js')
const productRoutes=require('./routes/product.router.js')

//Configuración de las rutas user/products

app.use('/users',userRoutes)
app.use('/products',productRoutes)


//Server running


app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})