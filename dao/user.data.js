const Users = require('../dao/models/user.model.js'); 

function getAllUsers() {
    return Users.find().exec();
  }
  
  function createUser(newUser) {
    return Users.create(newUser);
  }
  
  module.exports = {
    getAllUsers,
    createUser
  };