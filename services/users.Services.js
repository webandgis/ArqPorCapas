const userData = require('../dao/user.data.js');

function getAllUsers() {
  return userData.getAllUsers();
}

function createUser(newUser) {
  return userData.createUser(newUser);
}

module.exports = {
  getAllUsers,
  createUser
};
