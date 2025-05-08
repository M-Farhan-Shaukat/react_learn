import React, { useState } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import About from './about/PdfToBase64About'; // Updated About section import

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
    <>
      <head>
        <title>PDF to Base64 Converter</title>
        <meta
          name="description"
          content="Convert your PDF files to Base64 encoded data with this simple converter."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="PDF to Base64 Converter" />
        <meta
          property="og:description"
          content="Convert your PDF files to Base64 encoded data easily."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/pdf-to-base64" />
      </head>

      <div className="container mb-3">
        <h1
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
            color: props.mode === 'light' ? 'black' : 'white',
          }}
        >
          PDF to Base64 Converter
        </h1>

        <div>
          <input
            type="file"
            accept="application/pdf"
            id="pdf-upload"
            style={{ display: 'none' }}
            onChange={handlePdfUpload}
          />
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
        </div>

        {base64String && (
          <>
            <h4
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            >
              Base64 String of: {fileName}
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

        <div className="about-container">
          <About mode={props.mode} />
        </div>
      </div>
    </>
  );
}

export default PdfToBase64Converter;
