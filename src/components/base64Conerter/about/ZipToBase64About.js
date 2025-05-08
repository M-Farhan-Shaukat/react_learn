import React from "react";

function ZipToBase64About({ mode }) {
  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "white" : "#21292C",
        color: mode === "light" ? "black" : "white",
        padding: "20px",
        borderRadius: "6px",
        marginTop: "20px",
      }}
    >
      <h3>About ZIP to Base64 Converter</h3>
      <p>
        Welcome to our <strong>ZIP to Base64 Converter</strong>, a fast and user-friendly tool designed to transform ZIP files into Base64 encoded strings. Whether you're a developer, content manager, or simply need a secure text version of your ZIP file, this tool is tailored to make the process smooth and efficient.
      </p>

      <h3>Simple Drag-and-Drop Upload</h3>
      <p>
        Easily upload your ZIP file by dragging and dropping it into the upload area, or click to browse from your device. As soon as the file is selected, it’s automatically processed and encoded to Base64.
      </p>

      <h3>Copy and Use Instantly</h3>
      <strong>Copy to Clipboard:</strong>
      <p>
        Once the conversion is done, just click the "Copy to Clipboard" button to instantly copy the Base64 string. No downloads or extra steps required.
      </p>

      <h3>Why Convert ZIP to Base64?</h3>
      <p>
        Base64 encoding is ideal when binary files like ZIPs need to be transmitted or stored in a text-based environment, such as:
      </p>
      <ul>
        <li>Embedding ZIPs in JSON or XML</li>
        <li>Storing files in databases</li>
        <li>Sending ZIPs via email or API</li>
        <li>Cross-platform file sharing</li>
      </ul>

      <h3>How to Use:</h3>
      <p>Follow these simple steps to convert your ZIP file:</p>
      <ol>
        <li>Click the upload area or drag in your ZIP file.</li>
        <li>Wait a moment for the conversion to complete.</li>
        <li>Click "Copy to Clipboard" to copy your Base64 string.</li>
      </ol>

      <h3>Accessibility</h3>
      <p>
        Our tool works seamlessly across all modern devices including phones, tablets, and desktops—so you can convert your ZIP files to Base64 anytime, anywhere.
      </p>

      <h3>Why Return?</h3>
      <p>
        We're continuously improving the ZIP to Base64 experience with more formats, faster conversion, and better usability. Whether you're working on projects, APIs, or just need occasional encoding—you’ll always have a reason to come back!
      </p>
    </div>
  );
}

export default ZipToBase64About;
