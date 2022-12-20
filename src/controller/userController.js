const User = require('../../model/user')
const validation = require("../../utils/validation/user.validation");
const LoginValidate = require('../../utils/validation/login.validation')
const { tryAndCatch } = require("../../error/tryCatch");
const messages = require("../../utils/messages");
const bcrypt = require('bcryptjs')
const accessToken = require('../../utils/token')
const RegisterUser = tryAndCatch(async (req, res) => {
  const { error, value } = validation.UserValidation(req.body);
  if (error) {
    return res.status(400).json({ ok: false, msg: error.message });
  }
  const Users = await User.findOne({email : req.body.email});
  if (Users) {
    return res.status(400).json({ ok: false, msg: messages.DUPLICATE_EMAIL });
  } else {
    const hash = await bcrypt.hash(req.body.password, 8)
     await User.create({fullname: value.fullname, email : value.email, password : hash});
    return res.status(200).json({ ok: true, msg: messages.CREATED_USER });

  }
});

const LoginUser = tryAndCatch( async (req, res) => {
       const {error, value} = LoginValidate.LoginValidation(req.body)
       if(error) {
        return res.status(400).json({ ok: false, msg: error.message });
       }
       const searchUser = await User.findOne({email : req.body.email})
       if(!searchUser) 
       {
           return  res.status(400).json({ ok: false, msg: messages.WRONG_DETAILS });
       } else 
       {
           const loginUser = await bcrypt.compare(req.body.password, searchUser.password)
           if(!loginUser) 
           {
            return  res.status(400).json({ ok: false, msg: messages.WRONG_DETAILS });
           }
           const token = await accessToken.Token(searchUser)
           return res.status(200).json({ ok: true, msg: messages.ACCESS_GRANTED, token });

       }

       
})
module.exports = { RegisterUser, LoginUser };
