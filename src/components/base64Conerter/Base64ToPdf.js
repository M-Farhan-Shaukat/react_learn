import React, { useState } from 'react';

function Base64ToPdfConverter(props) {
  const [base64String, setBase64String] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  // Clean the Base64 string exactly like ipvoid
  const cleanBase64 = (input) => {
    if (!input) return '';

    let base64 = input.trim();

    if (base64.includes(',')) {
      base64 = base64.split(',')[1];
    }

    try {
      base64 = decodeURIComponent(base64);
    } catch (_) {}

    base64 = base64.replace(/[^A-Za-z0-9+/=]/g, '');

    return base64;
  };

  const previewPdf = () => {
    if (!base64String) {
      alert('Please paste a Base64 string!');
      return;
    }

    const cleanedBase64 = cleanBase64(base64String);

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      alert('Invalid or corrupted Base64 data!');
    }
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
      <h2
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        Base64 to PDF Converter
      </h2>

      <textarea
        rows="10"
        style={{ width: '100%' }}
        placeholder="Paste your Base64 string here..."
        value={base64String}
        onChange={(e) => {
          setBase64String(e.target.value);
          setPdfUrl(''); // Clear preview on input change
        }}
      />

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={previewPdf}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Preview PDF
        </button>

        <button
          onClick={downloadPdf}
          style={{
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

      {pdfUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3>PDF Preview:</h3>
          <iframe
            title="PDF Preview"
            src={pdfUrl}
            width="100%"
            height="500px"
            style={{ border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
}

export default Base64ToPdfConverter;
