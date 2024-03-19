// server.js

const express = require('express');
const multer = require('multer');
const { createWorker } = require('tesseract.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Multer middleware for handling file uploads
const upload = multer({ dest: 'uploads/' });

// Serve static files from the 'uploads' directory
app.use(express.static('uploads'));

// POST endpoint for handling file uploads and performing OCR
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    // Initialize Tesseract.js worker inside the route handler to avoid loading errors
    const worker = createWorker();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    // Perform OCR on the uploaded image
    const { data: { text } } = await worker.recognize(req.file.path);
    console.log('Extracted Text:', text);

    // Send the extracted text back to the client
    res.json({ text });

    // Terminate the worker after OCR is done to free up resources
    await worker.terminate();
  } catch (error) {
    console.error('Error performing OCR:', error);
    res.status(500).json({ error: 'Error performing OCR' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
