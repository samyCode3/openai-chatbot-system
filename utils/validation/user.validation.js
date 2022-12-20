const Joi = require("joi");
const validator = (schema) => (payload) => 
schema.validate(payload, { abortEarly : false})
     const userSchema = Joi.object({
         fullname : Joi.string().required(),
         email : Joi.string().email().required(),
         password : Joi.string().min(8).max(1000000).required(),
         confirm : Joi.ref('password')
     })

exports.UserValidation = validator(userSchema)