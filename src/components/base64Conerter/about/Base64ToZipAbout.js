// AboutPage.js
import React from 'react';

function AboutPage(props) {
  const textColor = props.mode === 'light' ? 'black' : 'white';
  const backgroundColor = props.mode === 'light' ? 'white' : '#21292C';

  return (
    <div className="container mb-3" style={{ backgroundColor, padding: '20px', borderRadius: '10px' }}>
      <h1 style={{ color: textColor, textAlign: 'center', paddingBottom: '10px' }}>
        About Base64 to ZIP Converter
      </h1>
      <p style={{ color: textColor, fontSize: '1.1rem', lineHeight: '1.6' }}>
        The Base64 to ZIP Converter allows you to easily convert Base64 encoded data into ZIP files. Simply paste a Base64 string, and the tool will decode the string and generate a downloadable ZIP file. It is perfect for converting compressed files encoded as Base64 for easier sharing or storage.
      </p>
      <h3 style={{ color: textColor, paddingTop: '20px' }}>
        How it works:
      </h3>
      <ul style={{ color: textColor, fontSize: '1.1rem', lineHeight: '1.6', marginLeft: '20px' }}>
        <li>Paste the Base64 string into the input box.</li>
        <li>Click on "Generate ZIP" to decode the Base64 and create a ZIP file.</li>
        <li>Click "Download Preview ZIP" to download the file.</li>
      </ul>
    </div>
  );
}

export default AboutPage;
