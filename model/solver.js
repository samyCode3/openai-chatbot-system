const mongoose = require('mongoose')
const solverSchema = new mongoose.Schema({
    userId : {
        type  : mongoose.Types.ObjectId
    },
    text  :{
        type: String,
        required: true
    },
    AiResponse  :{
        type: String,
        required: true
    },

    
}, {timestamps: true})
const SolverDB = mongoose.model("solver", solverSchema)
module.exports  = SolverDB