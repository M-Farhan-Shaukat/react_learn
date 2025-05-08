import React from 'react';

function Base64ToMediaAbout(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === 'light' ? 'white' : '#21292C',
        color: props.mode === 'light' ? 'black' : 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3>About Base64 to Media Converter</h3>
      <p>
        The Base64 to Media Converter allows you to convert Base64 encoded data into its respective media format. This tool can handle multiple formats including:
      </p>
      <ul>
        <li><strong>Images:</strong> Convert Base64 to image formats like JPEG, PNG, GIF.</li>
        <li><strong>Audio:</strong> Convert Base64 to audio formats like WAV and OGG.</li>
        <li><strong>Video:</strong> Convert Base64 to video formats like MP4.</li>
        <li><strong>PDF:</strong> Convert Base64 to PDF files for easy viewing and sharing.</li>
      </ul>

      <p>
        Simply paste your Base64 encoded string into the input field, click "Preview Media" to view the media in your browser, or click "Download Media" to save the file to your device.
      </p>

      <p>
        This tool is free to use and works entirely in your browser without the need for any server-side processing.
      </p>

      <p>
        If you encounter any issues or have questions, feel free to contact support.
      </p>

      <p style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>
        <strong>Note:</strong> Make sure the Base64 string is properly formatted. If the string is too large, it may take longer to process.
      </p>
    </div>
  );
}

export default Base64ToMediaAbout;
