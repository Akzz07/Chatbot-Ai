const express = require('express');
const router = express.Router();
const askAI = require('../services/ai');

router.get('/ai', (req, res) => {
  res.render('ai', { reply: null });
});

router.post('/ai', async (req, res) => {
  try {
    const reply = await askAI(req.body.message);
    res.render('ai', { reply });
  } catch (err) {
    res.render('ai', { reply: 'AI sedang bermasalah, coba lagi.' });
  }
});

module.exports = router;
