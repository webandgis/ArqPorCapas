const usersData=require('../dao/user.data.js')

function getAllUsers(){
    return usersData.getAllUsers()
}

function createUsers(newUser){
    return usersData.createUsers(newUser)
}

module.exports={
    getAllUsers,
    createUsers
}