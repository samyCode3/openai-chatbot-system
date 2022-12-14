const express = require("express")
const RouterBot = require("../src/route/routes")
const app = express()

const PORT = process.env.PORT
app.use(express.json())

app.get("/", (req, res) => {
    res.send("This is my AI space")
})
app.use((req, res, next)  => {
    if(res.status(404)) 
    {
        return res.send("When you are trying to get what u don't have ")
    }
    next()
})

app.use("/", RouterBot)

app.listen(PORT, console.log(`server running on port ${PORT}`))