const jwt = require('jsonwebtoken')
const messages = require('../utils/messages')
const AuthUser = async(req, res, next) => {
  try {
    const authHeader = req.headers.authorization
     if(!authHeader || !authHeader.startsWith('Bearer')) return res.status(401).json({ ok : false, massage: messages.UNAUTHORIZED_USER})
     
     const token = authHeader.split(" ")[1];
     const payload = jwt.verify(token, process.env.ACCESS_TOKEN);
     if (!payload) {
       return res
         .status(400)
         .json({
           ok: false,
           message: messages.UNAUTHORIZED_USER,
         });
    } else 
    {
        req.user = payload;
       
    }

    next();
  } catch (error) {
    if(error) return res.status(500).json({ ok : false, msg: error.message})
  }
     
   
}
module.exports = {AuthUser}