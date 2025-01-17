const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfFolder = path.join(__dirname, 'pdfs');

async function readPDFs() {
  let combinedText = '';
  const files = fs.readdirSync(pdfFolder);

  for (const file of files) {
    if (file.endsWith('.pdf')) {
      const data = fs.readFileSync(path.join(pdfFolder, file));
      const content = await pdf(data);
      combinedText += content.text;
    }
  }
  
  return combinedText;
}

module.exports = { readPDFs };
