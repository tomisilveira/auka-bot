const axios = require('axios');

async function getAIResponse(message, pdfData) {
  try {
    const response = await axios.post('URL_DE_TU_API', {
      input: message,
      context: pdfData,
      apiKey: process.env.API_KEY
    });
    return response.data.output;
  } catch (error) {
    console.error('Error al obtener respuesta de la IA:', error);
    return 'Lo siento, hubo un error al procesar tu mensaje.';
  }
}

module.exports = { getAIResponse };
