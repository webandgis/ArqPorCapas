const usersService=require('../services/users.Services.js')

function getAllUser(req,res){
    const users= usersService.getAllUsers()
    res.json(users)
}

function createUser(req,res){
    const newUser=req.body
    usersService,usersService.createUsers(newUser)
    res.status(201).json(newUser)

}


module.exports={
    getAllUser,
    createUser
}