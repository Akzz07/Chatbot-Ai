// const axios = require('axios');

// async function askAI(prompt) {
//   const response = await axios.post(
//     'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2',
//     {
//       inputs: prompt,
//       parameters: {
//         max_new_tokens: 200,
//         temperature: 0.7,
//       },
//     },
//     {
//       headers: {
//         Authorization: `Bearer ${process.env.HF_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }
//   );

//   // response format HF kadang array, kadang object
//   if (Array.isArray(response.data)) {
//     return response.data[0].generated_text;
//   }

//   return response.data.generated_text || 'AI tidak memberikan jawaban.';
// }

// module.exports = askAI;
