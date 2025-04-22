const express = require('express');
const UserRouter = express.Router();

const  userController  = require('../controller/userController');
const auth = require('../middewares/userAuth');


UserRouter.post('/signup', userController.createUser);
UserRouter.post('/login', userController.getUser);
UserRouter.get('/home',auth,userController.home);

module.exports = UserRouter;