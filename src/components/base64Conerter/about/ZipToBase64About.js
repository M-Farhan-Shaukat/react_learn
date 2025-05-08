import React from 'react';

function ZipToBase64About({ mode }) {
  return (
    <div
      style={{
        backgroundColor: mode === 'light' ? 'white' : '#21292C',
        color: mode === 'light' ? 'black' : 'white',
        padding: '20px',
        borderRadius: '6px',
        marginTop: '20px',
      }}
    >
      <h2>About ZIP to Base64 Converter</h2>
      <p>
        This <strong>ZIP to Base64 Converter</strong> allows you to convert ZIP files into Base64 encoded strings. Base64 is a binary-to-text encoding scheme that represents binary data (like a ZIP file) as a string of ASCII characters.
      </p>
      <p>
        You can either drag and drop your ZIP file or click the upload box to select a file from your device. Once the file is uploaded, the converter will automatically process the ZIP file and generate its Base64 encoded string.
      </p>
      <h3>How to Use:</h3>
      <ol>
        <li>Click the "Upload ZIP" box and select a ZIP file from your device.</li>
        <li>The converter will generate the Base64 string for the ZIP file.</li>
        <li>You can copy the Base64 string to your clipboard by clicking the "Copy to Clipboard" button.</li>
      </ol>
      <h3>Why Use Base64 Encoding?</h3>
      <p>
        Base64 encoding is commonly used when binary data (like a ZIP file) needs to be stored or transferred in text-based formats, such as embedding ZIP files in web pages, storing them in databases, or sending them via email.
      </p>
    </div>
  );
}

export default ZipToBase64About;
