const { AiChat, javascriptHelper } = require("../../utils/bot.utils");
const { tryAndCatch } = require("../../error/tryCatch");
const Message = require("../../model/message.model");
const SolverDB = require("../../model/solver");
const messages = require("../../utils/messages");
const botController = tryAndCatch(async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ ok: false, msg: messages.BAD_REQUEST });
  }
  const chat = await AiChat({ message });
  const messageStatus = await Message.create(
    {
      messages : message,
      AiResponse: chat,
      userId: req.user.user._id,
    }
  );

  return res
    .status(200)
    .json({ ok: true, msg: messages.CREATED, result: messageStatus });
});
const  askAIjavascript  = tryAndCatch(async (req, res) => {
    const {text} = req.body; 
    if(!text) return res.status(400).json({ ok: false, msg: messages.BAD_REQUEST });
    const textAi = await javascriptHelper({text})
  const solverStatus = await SolverDB.create(
    {
      text : text,
      AiResponse: textAi,
      userId: req.user.user._id,
    }
  );
  return res
    .status(200)
    .json({ ok: true, msg: messages.CREATED, result: solverStatus});
})

module.exports = { botController, askAIjavascript };
