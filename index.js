const express = require("express")
const env = require("./config/env")
const RouterBot = require("./src/route/routes")
const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.use("/", RouterBot)

app.listen(PORT, console.log(`server running on port ${PORT}`))