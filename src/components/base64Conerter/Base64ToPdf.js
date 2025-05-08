import React, { useState } from 'react';
import About from './about/Base64ToPDFAbout'; // Updated About section import

function Base64ToPdfConverter(props) {
  const [base64String, setBase64String] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

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
      props.showAlert('Please paste a Base64 string!', 'danger');
      return;
    }
    const cleanedBase64 = cleanBase64(base64String);
    try {
      const byteCharacters = atob(cleanedBase64);
      const byteArray = new Uint8Array([...byteCharacters].map((c) => c.charCodeAt(0)));
      const blob = new Blob([byteArray], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      props.showAlert('Invalid Base64 data!', 'danger');
    }
  };

  const downloadPdf = () => {
    if (!base64String) {
      props.showAlert('Please paste a Base64 string!', 'danger');
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
      props.showAlert('Invalid or corrupted Base64 data!', 'danger');
    }
  };

  return (
    <>
      <head>
        <title>Base64 to PDF Converter - Convert Base64 Encoded Data to PDF</title>
        <meta
          name="description"
          content="Convert your Base64 encoded strings to PDF format quickly and easily. Preview and download the PDF with just one click."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Base64 to PDF Converter" />
        <meta
          property="og:description"
          content="Convert Base64 encoded data to PDF with this simple and free converter. Paste your Base64 string and get your PDF instantly."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/base64-to-pdf" />
        <meta property="og:image" content="https://www.example.com/path-to-image.jpg" />
      </head>

      <div className="container mb-3">
        <h1
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
            color: props.mode === 'light' ? 'black' : 'white',
          }}
        >
          Base64 to PDF Converter
        </h1>

        <h3>Enter Base64 String Below:</h3>
        <textarea
          className="form-control"
          rows="8"
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
            <h3
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            >
              PDF Preview:
            </h3>
            <iframe
              title="PDF Preview"
              src={pdfUrl}
              width="100%"
              height="500px"
              style={{ border: '1px solid #ccc' }}
              aria-label="PDF Preview"
            />
          </div>
        )}

        <div className="about-container">
          <About mode={props.mode} />
        </div>
      </div>
    </>
  );
}

export default Base64ToPdfConverter;
