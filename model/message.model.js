const mongoose = require('mongoose')
const MessageSchema = new mongoose.Schema({
    userId : {
        type  : mongoose.Types.ObjectId
    },
    messages  :{
        type: String,
        required: true
    },
    AiResponse  :{
        type: String,
        required: true
    },

    
}, {timestamps: true})
const MessageDB = mongoose.model("messages", MessageSchema)
module.exports  = MessageDB