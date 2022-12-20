const Joi = require("joi");
const Loginvalidator = (schema) => (payload) => 
schema.validate(payload, { abortEarly : false})
     const userSchema = Joi.object({
         email : Joi.string().email().required(),
         password : Joi.string().min(8).max(1000000).required()
     })

exports.LoginValidation = Loginvalidator(userSchema)