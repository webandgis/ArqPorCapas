const mongoose=require('mongoose')
const userColecction="users"

//Crear un Schema de la collection a utilizar en mongo
const userShema= new mongoose.Schema({
    first_name:{type:String,required:true,max:10},
    last_name:{type:String,required:true,max:10},
    email:{type:String,required:true,max:20},
    age:{type:String,required:true,max:100},
    password:{type:String,required:true,max:20},
    role: { type: String, default: 'user' },
    carts: [
        {
          cart: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "carts",
            required: true,
          },
        },
      ],
})


userShema.pre("find", function (next) {
    this.populate("carts.cart");
    next();
  });
//Creación del modelo
const Users=mongoose.model(userColecction,userShema)

//Exportar el modulo
module.exports=Users