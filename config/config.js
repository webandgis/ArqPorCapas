const dotenv=require('dotenv')

dotenv.config()

const enviroment="PRODUCTION"

dotenv.config({
    path:enviroment==="DEVELOPMENT"?'./.env.development':'./.envproduction'
})

module.exports={
    port:process.env.PORT,
    mongoUrl:process.env.ADMIN_NAME
}