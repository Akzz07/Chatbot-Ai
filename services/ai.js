const Groq = require('groq-sdk');

console.log('GROQ_API_KEY:', process.env.GROQ_API_KEY);

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function askAI(message) {
  const res = await groq.chat.completions.create({
    model: 'llama-3.1-8b-instant',
    messages: [{ role: 'user', content: message }],
  });

  return res.choices[0].message.content;
}

module.exports = askAI;
