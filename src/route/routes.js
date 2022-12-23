const router = require("express").Router()
const UserController = require('../controller/userController')


router.post("/signup", UserController.RegisterUser)
router.post("/login",  UserController.LoginUser)


module.exports = router