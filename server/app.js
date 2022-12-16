const express = require("express")
const app = express()
const control = require("../src/route/routes")
const {ErrorHandler} = require('../error/errorHandler')
const PORT = process.env.PORT
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is my AI space")
})
app.use("/api/v1", control)
app.use((req, res, next)  => {
    if(res.status(404)) 
    {
        return res.send("When you are trying to get what u don't have ")
    }
    next()
})
app.use(ErrorHandler)


app.listen(PORT, console.log(`server running on port ${PORT}`))