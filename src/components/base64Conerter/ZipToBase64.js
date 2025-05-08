import React, { useState } from "react";
import { FaFileArchive } from "react-icons/fa";
import About from './about/ZipToBase64About'; // About page import

function ZipToBase64Converter(props) {
  const [base64String, setBase64String] = useState("");
  const [fileInfo, setFileInfo] = useState(null);

  const MAX_FILE_SIZE_MB = 20;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      props.showAlert("Please select a valid ZIP file.", "info");
      return;
    }

    if (file.type !== "application/zip") {
      props.showAlert(`Unsupported file type: ${file.type}`, "warning");
      return;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      props.showAlert(`File is too large (${fileSizeMB.toFixed(2)} MB). Max allowed is 20 MB.`, "warning");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fullBase64 = reader.result || "";
      const cleanedBase64 = fullBase64.replace(/^data:[^;]+;base64,/, "");
      const outputSizeKB = Math.round((cleanedBase64.length * 3) / 4 / 1024);
      const inputSizeKB = Math.round(file.size / 1024);

      setFileInfo({
        name: file.name,
        size: inputSizeKB,
        type: file.type,
        outputSize: outputSizeKB,
      });

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
        <title>ZIP to Base64 Converter</title>
        <meta
          name="description"
          content="Convert your ZIP files to Base64 encoded data with this simple converter."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="ZIP to Base64 Converter" />
        <meta
          property="og:description"
          content="Convert your ZIP files to Base64 encoded data easily."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.example.com/zip-to-base64" />
      </head>

      <div className="container mb-3">
        <h1
          style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
            color: props.mode === 'light' ? 'black' : 'white',
          }}
        >
          ZIP to Base64 Converter
        </h1>

        <div>
          <input
            type="file"
            accept=".zip"
            id="zip-upload"
            style={{ display: 'none' }}
            onChange={handleFileUpload}
          />
          <label
            htmlFor="zip-upload"
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
            <FaFileArchive size={40} color="#888" />
            <p style={{ margin: '10px 0 4px' }}>Drag or Upload your ZIP file</p>
            <small>Only .ZIP format supported (Max 20 MB)</small>
          </label>
        </div>

        {base64String && fileInfo && (
          <>
            <h4
              style={{
                backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
                color: props.mode === 'light' ? 'black' : 'white',
              }}
            >
              Base64 String of: {fileInfo.name}
            </h4>
            <table className="table table-bordered table-striped mt-3">
              <tbody>
                <tr>
                  <th scope="row">Filename:</th>
                  <td>{fileInfo.name}</td>
                </tr>
                <tr>
                  <th scope="row">File Size:</th>
                  <td>{fileInfo.size} KB</td>
                </tr>
                <tr>
                  <th scope="row">Base64 Size:</th>
                  <td>{fileInfo.outputSize} KB</td>
                </tr>
                <tr>
                  <th scope="row">MIME Type:</th>
                  <td>{fileInfo.type}</td>
                </tr>
              </tbody>
            </table>

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

export default ZipToBase64Converter;
