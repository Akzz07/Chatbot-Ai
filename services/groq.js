const axios = require('axios');

async function askAI(message) {
  console.log('➡️ SEND TO GROQ:', message);

  const response = await axios.post(
    'https://api.groq.com/openai/v1/chat/completions',
    {
      model: 'llama-3.1-8b-instant',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
  );

  console.log('⬅️ GROQ RESPONSE:', response.data);

  return response.data.choices[0].message.content;
}

module.exports = askAI;
