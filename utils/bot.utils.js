const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()
const configuration = new Configuration({
  apiKey: process.env.OPENAI_SECRET_KEY,
});
const openai = new OpenAIApi(configuration);

const AiChat = async ({message}) => {
   const messages = await message
    const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Human: ${messages} \nAI: I am an AI created by OpenAI. How can I help you today?\n Human: ${messages}`,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0.6,
        stop: [`Human : `, ' AI:'],
      });
      const chatResult = response.data.choices[0].text;
      return chatResult
}

const javascriptHelper = async ({text}) => {
const userText = await text
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: `You: ${userText}\nJarvis:  `,
  temperature: 0.7,
  max_tokens: 60,
  top_p: 1,
  frequency_penalty: 0.5,
  presence_penalty: 0,
  stop: ["You:"],
});
const helperResult = response.data.choices[0].text;
return helperResult
}
module.exports = {AiChat, javascriptHelper}