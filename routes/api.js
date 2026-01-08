const express = require('express');
const router = express.Router();
const askAI = require('../services/groq');

router.post('/ai', async (req, res) => {
  try {
    console.log('REQUEST BODY:', req.body);

    const { message } = req.body;
    const answer = await askAI(message);
    console.log('AI FINAL ANSWER:', answer);

    res.json({ answer });
  } catch (err) {
    console.error('❌ AI ERROR FULL:', err.response?.data || err.message);
    res.status(500).json({
      error: 'AI error',
      detail: err.response?.data || err.message,
    });
  }
});

module.exports = router;
