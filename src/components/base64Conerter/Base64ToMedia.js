import React, { useState } from 'react';
import About from './about/Base64ToMediaAbout'; // Updated About section import

function Base64ToMediaConverter(props) {
  const [base64Input, setBase64Input] = useState('');
  const [mediaUrl, setMediaUrl] = useState('');
  const [detectedType, setDetectedType] = useState('');

  const detectMimeType = (base64) => {
    const signatures = {
      '/9j': 'image/jpeg',
      'iVBOR': 'image/png',
      'R0lGOD': 'image/gif',
      'JVBER': 'application/pdf',
      'AAAAF': 'video/mp4',
      'UklGR': 'audio/wav',
      'T2dnU': 'audio/ogg',
    };

    for (const sig in signatures) {
      if (base64.startsWith(sig)) return signatures[sig];
    }

    return 'application/octet-stream'; // fallback
  };

  const convertBase64ToMedia = () => {
    if (!base64Input) {
      props.showAlert('Please paste a Base64 string!', 'danger');
      return;
    }

    const cleanedBase64 = base64Input.replace(/[^A-Za-z0-9+/=]/g, '');

    try {
      const mimeType = detectMimeType(cleanedBase64);
      const binary = atob(cleanedBase64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: mimeType });
      const url = URL.createObjectURL(blob);

      setMediaUrl(url);
      setDetectedType(mimeType);
    } catch (error) {
      console.error('Error decoding Base64:', error);
      props.showAlert('Invalid Base64 data!', 'danger');
    }
  };

  const downloadMedia = () => {
    if (!base64Input) {
      props.showAlert('Please paste a Base64 string!', 'danger');
      return;
    }

    const cleanedBase64 = base64Input.replace(/[^A-Za-z0-9+/=]/g, '');

    try {
      const mimeType = detectMimeType(cleanedBase64);
      const binary = atob(cleanedBase64);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
      }

      const blob = new Blob([bytes], { type: mimeType });

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'downloaded-file';
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
        <title>Base64 to Media Converter - Convert Base64 to Image, Audio, Video, or PDF</title>
        <meta name="description" content="Convert Base64 encoded data to its respective format: image, audio, video, or PDF." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Base64 to Media Converter" />
        <meta property="og:description" content="Convert Base64 encoded data to media formats like image, audio, video, or PDF." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/base64-to-media" />
        <meta property="og:image" content="https://www.example.com/path-to-image.jpg" />
      </head>

      <div className="container mb-3">
        <h1
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
            color: props.mode === 'light' ? 'black' : 'white',
            textAlign: 'center',
            padding: '15px',
            borderRadius: '8px',
          }}
        >
          Base64 to Media Converter
        </h1>

        <h3>Enter Base64 String Below:</h3>
        <textarea
          className="form-control"
          rows="8"
          placeholder="Paste your Base64 string here..."
          value={base64Input}
          onChange={(e) => {
            setBase64Input(e.target.value);
            setMediaUrl(''); // Clear preview on input change
          }}
          style={{
            marginTop: '10px',
            borderRadius: '8px',
            padding: '10px',
            fontFamily: 'Arial, sans-serif',
          }}
        />

        <div style={{ marginTop: '20px' }}>
          <button
            onClick={convertBase64ToMedia}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              marginRight: '10px',
              cursor: 'pointer',
              borderRadius: '6px',
            }}
          >
            Preview Media
          </button>

          <button
            onClick={downloadMedia}
            style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '6px',
            }}
          >
            Download Media
          </button>
        </div>

        {mediaUrl && (
          <div style={{ marginTop: '20px' }}>
            <h3
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            >
              Media Preview:
            </h3>
            {detectedType.startsWith('image') && (
              <div className="text-center">
                <img src={mediaUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px' }} />
              </div>
            )}

            {detectedType.startsWith('video') && (
              <div className="text-center">
                <video controls src={mediaUrl} style={{ maxWidth: '100%', maxHeight: '400px' }} />
              </div>
            )}

            {detectedType.startsWith('audio') && (
              <div className="text-center">
                <audio controls src={mediaUrl} />
              </div>
            )}

            {detectedType === 'application/pdf' && (
              <div className="text-center">
                <iframe
                  title="PDF Preview"
                  src={mediaUrl}
                  width="100%"
                  height="500px"
                  style={{ border: '1px solid #ccc' }}
                  aria-label="PDF Preview"
                />
              </div>
            )}
          </div>
        )}

        <div className="about-media-container" style={{ marginTop: '30px' }}>
          <About mode={props.mode} />
        </div>
      </div>
    </>
  );
}

export default Base64ToMediaConverter;
