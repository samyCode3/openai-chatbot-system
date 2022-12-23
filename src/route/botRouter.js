const router = require("express").Router()
const {botController, askAIjavascript} =  require('../controller/botController') 

router.post("/chat", botController)
router.post("/ask-jarvis", askAIjavascript)

module.exports = router