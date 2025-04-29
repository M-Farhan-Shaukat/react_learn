import React, { useState } from 'react';

function Base64ToPdfConverter(props) {
  const [base64String, setBase64String] = useState('');

  // Clean the Base64 string exactly like ipvoid
  const cleanBase64 = (input) => {
    if (!input) return '';

    let base64 = input.trim();

    // If data:application/pdf;base64, is present — remove it
    if (base64.includes(',')) {
      base64 = base64.split(',')[1];
    }

    // Decode URI if needed (optional)
    try {
      base64 = decodeURIComponent(base64);
    } catch (_) {
      // Ignore errors
    }

    // Remove ALL non-Base64 characters
    base64 = base64.replace(/[^A-Za-z0-9+/=]/g, '');

    return base64;
  };

  const downloadPdf = () => {
    if (!base64String) {
      alert('Please paste a Base64 string!');
      return;
    }

    const cleanedBase64 = cleanBase64(base64String);

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'downloaded.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      alert('Invalid or corrupted Base64 data!');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2  style={{
          backgroundColor: props.mode === "light" ? "white" : "#21292C",
          color: props.mode === "light" ? "black" : "white",
        }}>Base64 to PDF Converter</h2>
      <textarea
        rows="10"
        style={{ width: '100%' }}
        placeholder="Paste your Base64 string here..."
        value={base64String}
        onChange={(e) => setBase64String(e.target.value)}
      />
      <button
        onClick={downloadPdf}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Download PDF
      </button>
    </div>
  );
}

export default Base64ToPdfConverter;
