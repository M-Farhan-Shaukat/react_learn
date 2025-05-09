import React, { useState } from 'react';
import { FaFileImage } from 'react-icons/fa';
import About from './About'; // Import About component

function ImageConverter(props) {
  const [file, setFile] = useState(null);
  const [convertedImage, setConvertedImage] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [originalType, setOriginalType] = useState('');

  const supportedFormats = ['image/png', 'image/jpeg', 'image/webp', 'image/gif'];

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile || !uploadedFile.type.startsWith('image/')) {
      props.showAlert?.('Please upload a valid image file.', 'info');
      return;
    }

    setFile(uploadedFile);
    setOriginalType(uploadedFile.type);
    setConvertedImage(null);
    setSelectedFormat('');
  };

  const handleConvert = () => {
    if (!file || !selectedFormat) return;

    const img = new Image();
    const reader = new FileReader();

    reader.onload = function (e) {
      img.onload = function () {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const converted = canvas.toDataURL(selectedFormat);
        setConvertedImage(converted);
        props.showAlert?.("Image converted successfully!", "success");
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = convertedImage;
    link.download = `converted.${selectedFormat.split('/')[1]}`;
    link.click();
  };

  const availableFormats = supportedFormats.filter((format) => format !== originalType);

  return (
    <>
      <head>
        <title>Image Format Converter</title>
        <meta name="description" content="Convert image formats easily using our online converter." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Image Format Converter" />
        <meta property="og:description" content="Convert image formats like PNG, JPG, WebP, and GIF." />
        <meta property="og:type" content="website" />
      </head>

      <div className="container mb-3">
        <h1 style={{
          backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
          color: props.mode === 'light' ? 'black' : 'white',
        }}>
          Image Format Converter
        </h1>

        <div>
          <input
            type="file"
            accept="image/*"
            id="image-upload"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <label
            htmlFor="image-upload"
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
            <FaFileImage size={40} color="#888" />
            <p style={{ margin: '10px 0 4px' }}>Drag or Upload your Image</p>
            <small>Supported: PNG, JPG, WEBP, GIF</small>
          </label>
        </div>

        {file && (
          <>
            <div style={{ marginTop: '20px' }}>
              <label>Select format to convert:</label>
              <select
                value={selectedFormat}
                onChange={(e) => setSelectedFormat(e.target.value)}
                style={{ marginTop: '8px', padding: '6px', width: '100%' }}
              >
                <option value="">-- Choose format --</option>
                {availableFormats.map((format) => (
                  <option key={format} value={format}>
                    {format.split('/')[1].toUpperCase()}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleConvert}
              disabled={!selectedFormat}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Convert Image
            </button>
          </>
        )}

        {convertedImage && (
          <div style={{ marginTop: '30px' }}>
            <h4 style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
              color: props.mode === 'light' ? 'black' : 'white',
            }}>
              Converted Image Preview
            </h4>
            <img
              src={convertedImage}
              alt="Converted"
              style={{ maxWidth: '100%', borderRadius: '6px', marginBottom: '10px' }}
            />
            <button
              onClick={downloadImage}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Download Converted Image
            </button>
          </div>
        )}
      </div>

      <div className="about-media-container" style={{ marginTop: "30px" }}>
          <About mode={props.mode} />
        </div>
    </>
  );
}

export default ImageConverter;
