// UploadPrescription.js
import React, { useState, useRef } from 'react';
import axios from 'axios';
import './UploadPrescription.css';

const UploadPrescription = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrText, setOcrText] = useState('');
  const inputRef = useRef(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('http://localhost:5000/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const { data } = response;
      setOcrText(data.text); // Assuming your OCR endpoint returns extracted text
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setOcrText('');
    inputRef.current.value = null; // Clear file input
  };

  return (
    <div className="upload-container">
      <h2>Upload Prescription</h2>
      <input type="file" ref={inputRef} onChange={handleImageChange} accept="image/*" />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected Prescription" />}
      <button className="upload-btn" onClick={handleUpload} disabled={!selectedImage}>Upload and Extract Text</button>
      <button className="clear-btn" onClick={handleClear}>Clear</button>
      <p className="ocr-text">{ocrText}</p>
    </div>
  );
};

export default UploadPrescription;
