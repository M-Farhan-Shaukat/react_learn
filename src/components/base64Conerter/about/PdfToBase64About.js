import React from 'react';

function Base64ToPDFAbout({ mode }) {
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
      <h2>About PDF to Base64 Converter</h2>
      <p>
        This <strong>PDF to Base64 Converter</strong> allows you to convert your PDF files into Base64 encoded strings. Base64 is a binary-to-text encoding scheme that represents binary data, such as a PDF file, as a string of ASCII characters.
      </p>
      <p>
        You can either drag and drop your PDF file or click the upload box to select a file from your device. Once the file is uploaded, the converter will automatically process the PDF and generate its Base64 encoded string.
      </p>
      <h3>How to Use:</h3>
      <ol>
        <li>Click the "Upload PDF" box and select a PDF file from your device.</li>
        <li>The converter will generate the Base64 string for the PDF file.</li>
        <li>You can copy the Base64 string to your clipboard by clicking the "Copy to Clipboard" button.</li>
      </ol>
      <h3>Why Use Base64 Encoding?</h3>
      <p>
        Base64 encoding is commonly used in situations where binary data needs to be stored and transferred in textual formats, such as embedding PDF files in web pages, storing them in databases, or sending them via email.
      </p>
    </div>
  );
}

export default Base64ToPDFAbout;
