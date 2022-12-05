const got = require('got');

const BotQuest = (req, res) => {
    (async () => {

// const human = req.body 

        
const chatLog = `Human: hi how are u\nAI: I am doing great. How can I help you today?\n`;

const question = req.body;
        const url = 'https://api.openai.com/v1/engines/davinci/completions';
        const prompt = `${chatLog}Human: ${req.body.human}`;
        const params = {
          'prompt': prompt,
          'max_tokens': 150,
          'temperature': 0.9,
          'frequency_penalty': 0,
          'presence_penalty': 0.6,
          'stop': '\nHuman\nAI'
        };
        const headers = {
          'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
        };
      
        try {
          const response = await got.post(url, { json: params, headers: headers }).json();
          output = `${prompt}${response.choices[0].text}`;
          res.status(200).json( { status: true,  text: output})
        } catch (err) {
          console.log(err);
        }
      })();
}

module.exports = {BotQuest}
