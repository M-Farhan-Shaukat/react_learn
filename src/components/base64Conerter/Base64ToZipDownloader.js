import React, { useState } from 'react';

function Base64ToZipConverter(props) {
  const [base64String, setBase64String] = useState('');
  const [zipBlobUrl, setZipBlobUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [zipReady, setZipReady] = useState(false);

  const cleanBase64 = (input) => {
    if (!input) return '';
    let base64 = input.trim();
    if (base64.includes(',')) {
      base64 = base64.split(',')[1];
    }
    try {
      base64 = decodeURIComponent(base64);
    } catch (_) {}
    return base64.replace(/[^A-Za-z0-9+/=]/g, '');
  };

  const previewZip = () => {
    if (!base64String) {
      props.showAlert("Please paste a Base64 string!", "danger");
      return;
    }

    setLoading(true);
    setZipReady(false);

    setTimeout(() => {
      const cleanedBase64 = cleanBase64(base64String);
      try {
        const byteCharacters = atob(cleanedBase64);
        const byteArray = new Uint8Array([...byteCharacters].map(c => c.charCodeAt(0)));
        const blob = new Blob([byteArray], { type: 'application/zip' });
        const url = URL.createObjectURL(blob);
        setZipBlobUrl(url);
        setZipReady(true);
      } catch (error) {
        console.error('Error decoding Base64:', error);
        props.showAlert("Invalid or corrupted Base64 data!", "danger");
      } finally {
        setLoading(false);
      }
    }, 1000); // simulate processing delay
  };

  const downloadZip = () => {
    if (!zipBlobUrl) return;
    const link = document.createElement('a');
    link.href = zipBlobUrl;
    link.download = 'downloaded.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isDisabled = loading;

  return (
    <div className="container mb-3" style={{ opacity: isDisabled ? 0.5 : 1, pointerEvents: isDisabled ? 'none' : 'auto' }}>
      <h2 style={{ backgroundColor: props.mode === 'light' ? 'white' : '#21292C', color: props.mode === 'light' ? 'black' : 'white' }}>
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
          setZipReady(false);
        }}
        disabled={loading}
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
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate ZIP'}
        </button>

        {/* <button
          onClick={downloadZip}
          style={{
            padding: '10px 20px',
            backgroundColor: zipReady ? '#4CAF50' : '#aaa',
            color: 'white',
            border: 'none',
            cursor: zipReady ? 'pointer' : 'not-allowed',
          }}
          disabled={!zipReady}
        >
          Download ZIP
        </button> */}
      </div>

      {loading && (
        <div style={{ marginTop: '15px' }}>
          <div className="spinner-border text-primary" role="status"></div> Generating ZIP...
        </div>
      )}

      {zipReady && !loading && (
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ backgroundColor: props.mode === 'light' ? 'white' : '#21292C', color: props.mode === 'light' ? 'black' : 'white' }}>
            ZIP is ready to be downloaded
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
