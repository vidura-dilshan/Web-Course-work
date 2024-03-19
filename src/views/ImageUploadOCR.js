import React, { useState, useEffect } from 'react';
import Tesseract from 'tesseract.js';
import './ImageUploadOCR.css'; // Import the CSS file

function ImageUploadOCR() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tesseractWorker, setTesseractWorker] = useState(null);

  useEffect(() => {
    const initTesseract = async () => {
      const worker = Tesseract.createWorker({
        lang: 'eng', // Change to your desired language code
      });

      try {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        setTesseractWorker(worker);
      } catch (err) {
        console.error('Tesseract initialization error:', err);
        setError('Failed to initialize Tesseract');
      }
    };

    initTesseract();

    return () => {
      if (tesseractWorker) {
        tesseractWorker.terminate();
      }
    };
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setOcrText(''); // Clear previous OCR text
    setError(null); // Clear previous error
  };

  const handleOcr = async () => {
    if (!selectedImage) {
      setError('Please select an image to perform OCR');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data: { text } } = await Tesseract.recognize(selectedImage, 'eng');
      setOcrText(text);
    } catch (err) {
      console.error('OCR error:', err);
      setError('OCR processing failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="input-container">
        <input type="file" accept="image/*" id="fileInput" onChange={handleImageChange} />
        <label htmlFor="fileInput">Choose Image</label>
      </div>
      {selectedImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(selectedImage)} alt="Selected Image" />
        </div>
      )}
      <div className="button-container">
        <button onClick={handleOcr} disabled={isLoading}>
          {isLoading ? 'Extracting Text...' : 'Extract Text from Image'}
        </button>
      </div>
      {ocrText && <p>Extracted Text: {ocrText}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default ImageUploadOCR;
