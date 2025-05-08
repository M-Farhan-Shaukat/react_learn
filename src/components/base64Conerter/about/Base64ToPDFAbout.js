import React from "react";

function About(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
        padding: "20px",
        borderRadius: "8px",
        lineHeight: "1.6",
      }}
    >
      <h3>About Our Base64 to PDF Converter</h3>
      <p>
        Welcome to our Base64 to PDF Converter – an easy, efficient, and
        reliable tool designed to transform Base64-encoded strings into
        high-quality PDF files instantly. Whether you’re a developer,
        researcher, or curious user, this tool simplifies the process of decoding
        and viewing Base64-encoded PDFs.
      </p>

      <h3>Why Use This Tool?</h3>
      <p>
        Our converter is built to make Base64 decoding accessible for everyone.
        No complicated steps or installations—just paste your Base64 string and
        generate a PDF in seconds.
      </p>

      <strong>Instant Conversion:</strong>
      <p>
        Convert Base64 to PDF in real-time with just one click—no need for
        external apps or tools.
      </p>

      <strong>Free & Secure:</strong>
      <p>
        Completely free to use and operates securely in your browser. Your data
        never leaves your device.
      </p>

      <strong>Works on Any Device:</strong>
      <p>
        Whether you're on a mobile phone, tablet, or desktop, our tool is fully
        responsive and ready to assist you.
      </p>

      <h3>Key Features</h3>
      <p>
        <strong>✔ Paste and Convert:</strong> Just paste your Base64 string and
        get an instant PDF preview.
      </p>
      <p>
        <strong>✔ PDF Preview:</strong> View the PDF directly in your browser
        without downloading first.
      </p>
      <p>
        <strong>✔ Download Option:</strong> Save your decoded PDF with a single
        click.
      </p>
      <p>
        <strong>✔ Lightweight & Fast:</strong> Minimal load time and maximum
        performance.
      </p>

      <h3>How to Use:</h3>
      <p>
        1. Copy and paste your Base64 string into the input field. <br />
        2. Click the <strong>"Convert"</strong> button. <br />
        3. View the PDF directly in the preview area. <br />
        4. Click <strong>"Download"</strong> to save the file locally.
      </p>

      <h3>Accessibility</h3>
      <p>
        You can use this tool on any platform, anytime. It’s fully
        mobile-responsive and browser-friendly—no sign-up or installation
        required.
      </p>

      <h3>Why Return?</h3>
      <p>
        We continuously enhance our tool for better speed, design, and
        reliability. Whether it’s a one-time conversion or frequent usage, our
        Base64 to PDF converter will always be ready for your needs.
      </p>
    </div>
  );
}

export default About;
