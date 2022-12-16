const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config()

const AiChat = async ({message}) => {
   const messages = await message
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_SECRET_KEY,
      });
      const openai = new OpenAIApi(configuration);
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
module.exports = {AiChat}