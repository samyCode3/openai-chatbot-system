const router = require("express").Router()
const controller =  require('../controller/botController') 
const UserController = require('../controller/userController')
const auth  = require("../../middleware/auth")
router.post("/chat", auth.AuthUser, controller.botController)
router.post("/signup", UserController.RegisterUser)
router.post("/login",  UserController.LoginUser)

module.exports = router