import React from 'react';

function About(props) {
  return (
    <div className="about-section">
      <h2
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        About the Base64 to PDF Converter
      </h2>
      <p
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        This tool allows you to easily convert Base64 encoded strings to PDF format. Simply paste your Base64 string, and our converter will decode it and generate a PDF file for you. You can preview the PDF in your browser or download it to your device for offline use.
      </p>

      <h3
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        How Does It Work?
      </h3>
      <p
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        Base64 encoding is often used to store binary data, such as images or files, in a text format. This converter takes that encoded data, decodes it, and generates a PDF file for you to view or download. It’s simple, quick, and free to use!
      </p>

      <h3
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        Why Use This Tool?
      </h3>
      <ul
        style={{
          color: props.mode === 'light' ? 'black' : 'white',
        }}
      >
        <li>Fast and easy conversion of Base64 to PDF</li>
        <li>No need to install any software</li>
        <li>Preview and download PDF instantly</li>
        <li>Free to use</li>
      </ul>
    </div>
  );
}

export default About;
