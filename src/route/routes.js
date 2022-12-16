const router = require("express").Router()
const controller =  require('../controller/botController') 
router.post("/chat", controller.botController)
module.exports = router