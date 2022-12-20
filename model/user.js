const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
     fullname: {
         type : String,
         required : true
     },
     email: {
         type : String,
         required : true
     },
     password: {
         type : String,
         required : true
     }
}, {timestamps: true})
const UserDB = mongoose.model("users", UserSchema)
module.exports  = UserDB