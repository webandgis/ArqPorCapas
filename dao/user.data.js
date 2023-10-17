let users=[]

module.exports={
    getAllUsers:()=>users,
    createUsers:(newUser)=>{
    users.push(newUser)
    }
}