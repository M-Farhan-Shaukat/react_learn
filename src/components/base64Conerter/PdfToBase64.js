import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';

function PdfToBase64Converter(props) {
  const [base64String, setBase64String] = useState('');
  const [fileName, setFileName] = useState('');

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (!file || file.type !== 'application/pdf') {
        props.showAlert("Please select a valid PDF file.", "info");
      return;
    }

    setFileName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      const fullBase64 = reader.result || '';
      const cleanedBase64 = fullBase64.replace(/^data:application\/pdf;base64,/, '');
      setBase64String(cleanedBase64);
    };
    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64String).then(() => {
        props.showAlert("Base64 copied to clipboard!", "success");
      
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{
        backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
        color: props.mode === 'light' ? 'black' : 'white',
      }}>
        PDF to Base64 Converter
      </h2>

      {/* Hidden Input */}
      <input
        type="file"
        accept="application/pdf"
        id="pdf-upload"
        style={{ display: 'none' }}
        onChange={handlePdfUpload}
      />

      {/* Styled Label as Upload Box */}
      <label
        htmlFor="pdf-upload"
        style={{
          border: '2px dashed #ccc',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          borderRadius: '6px',
          backgroundColor: '#fafafa',
        }}
      >
        <FaFilePdf size={40} color="#888" />
        <p style={{ margin: '10px 0 4px' }}>Drag or Upload your PDF file</p>
        <small>Only .PDF format supported</small>
      </label>

      {base64String && (
        <>
          <h4 style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
            color: props.mode === 'light' ? 'black' : 'white',
          }}>
            Base64 string of: {fileName}
          </h4>
          <textarea
            rows="10"
            style={{ width: '100%' }}
            readOnly
            value={base64String}
          />
          <button
            onClick={copyToClipboard}
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Copy to Clipboard
          </button>
        </>
      )}
    </div>
  );
}

export default PdfToBase64Converter;
