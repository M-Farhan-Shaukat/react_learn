import React, { useState } from 'react';

function Base64ToMediaConverter() {
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
    if (!base64Input) return;

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
      alert('Invalid Base64 string.');
    }
  };

  return (
    <div className="container mt-4">
      <h3>Base64 to Media Converter (No MIME)</h3>
      <textarea
        rows="8"
        className="form-control"
        placeholder="Paste your raw Base64 string here..."
        value={base64Input}
        onChange={(e) => setBase64Input(e.target.value)}
      />
      <button className="btn btn-primary mt-2" onClick={convertBase64ToMedia}>
        Convert & Preview
      </button>

      {mediaUrl && (
        <div className="mt-4">
          <p><strong>Detected MIME Type:</strong> {detectedType}</p>
          {detectedType.startsWith('image') && <img src={mediaUrl} alt="Preview" style={{ maxWidth: '100%' }} />}
          {detectedType.startsWith('video') && <video controls src={mediaUrl} style={{ maxWidth: '100%' }} />}
          {detectedType.startsWith('audio') && <audio controls src={mediaUrl} />}
          {detectedType === 'application/pdf' && <iframe src={mediaUrl} width="100%" height="500px" title="PDF Preview" />}
          <div className="mt-2">
            <a href={mediaUrl} download="converted-file" className="btn btn-success">Download File</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Base64ToMediaConverter;
