require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const aiService = require('./aiService');
const pdfService = require('./pdfService');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/message', async (req, res) => {
  const userMessage = req.body.message;
  const pdfData = await pdfService.readPDFs();
  const aiResponse = await aiService.getAIResponse(userMessage, pdfData);
  res.json({ reply: aiResponse });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
