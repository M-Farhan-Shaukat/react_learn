import React, { useState } from 'react';

function Base64ToZipConverter(props) {
  const [base64String, setBase64String] = useState('');
  const [zipBlobUrl, setZipBlobUrl] = useState('');

  // Clean the Base64 string
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

  const previewZip = () => {
    if (!base64String) {
      props.showAlert("Please paste a Base64 string!", "danger");
      return;
    }

    const cleanedBase64 = cleanBase64(base64String);

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
      const blob = new Blob([byteArray], { type: 'application/zip' });
      const url = URL.createObjectURL(blob);
      setZipBlobUrl(url);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      props.showAlert("Invalid or corrupted Base64 data!", "danger");
    }
  };

  const downloadZip = () => {
    if (!base64String) {
      props.showAlert("Please paste a Base64 string!", "danger");
      return;
    }

    const cleanedBase64 = cleanBase64(base64String);

    try {
      const byteCharacters = atob(cleanedBase64);
      const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
      const blob = new Blob([byteArray], { type: 'application/zip' });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'downloaded.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      props.showAlert("Invalid or corrupted Base64 data!", "danger");
    }
  };

  return (
    <div className="container mb-3">
      <h2
        style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        Base64 to ZIP Converter
      </h2>

      <textarea
        className="form-control"
        rows="10"
        placeholder="Paste your Base64 ZIP string here..."
        value={base64String}
        onChange={(e) => {
          setBase64String(e.target.value);
          setZipBlobUrl('');
        }}
      />

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={previewZip}
          style={{
            padding: '10px 20px',
            backgroundColor: '#2196F3',
            color: 'white',
            border: 'none',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Generate ZIP
        </button>

        <button
          onClick={downloadZip}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Download ZIP
        </button>
      </div>

      {zipBlobUrl && (
        <div style={{ marginTop: '20px' }}>
          <h3
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
              color: props.mode === 'light' ? 'black' : 'white',
            }}
          >
            ZIP File Ready:
          </h3>
          <a
            href={zipBlobUrl}
            download="preview.zip"
            className="btn btn-primary"
            style={{ marginTop: '10px' }}
          >
            Click here to Download Preview ZIP
          </a>
        </div>
      )}
    </div>
  );
}

export default Base64ToZipConverter;
