const jwt = require('jsonwebtoken')
const Token = async(user) => 
{
    return jwt.sign({user}, process.env.ACCESS_TOKEN, {
        expiresIn: process.env.JWT_EXPIRES,
      })
}
module.exports = {Token}