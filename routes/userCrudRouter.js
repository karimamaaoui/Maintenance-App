const express = require('express');
const route = express.Router()
const controller =require("../controllers/userCrudController")


route.post('users/add', controller.create);
route.get('users', controller.find);
route.put('users/update/:id', controller.update);
route.delete('users/delete/:id', controller.delete);


module.exports = route