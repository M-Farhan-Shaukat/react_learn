import React from "react";

function Base64ToPDFAbout({ mode }) {
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
      <h3>About Our PDF to Base64 Converter Tool</h3>
      <p>
        Welcome to our <strong>PDF to Base64 Converter</strong>, a simple yet
        powerful tool that helps you transform your PDF files into Base64-encoded
        strings. Whether you're embedding a PDF into HTML, storing it in a
        database, or sending it via API, our tool makes the process seamless.
      </p>

      <h3>Save Time and Simplify Workflows</h3>
      <p>
        Our intuitive interface enables you to quickly convert PDF files without
        installing any software. Just drag and drop your file or select it from
        your device, and we’ll instantly generate the Base64 output.
      </p>

      <strong>Why Use Base64 Encoding?</strong>
      <p>
        Base64 is ideal when you need to embed binary files (like PDFs) into
        textual environments such as HTML, JSON, or XML. It ensures compatibility
        and simplifies transmission across systems that handle only text.
      </p>

      <strong>Versatile Applications</strong>
      <p>
        From developers working on file transfer features to designers embedding
        documents in web pages, this tool caters to a wide range of use cases.
      </p>

      <strong>User-Centric Experience</strong>
      <p>
        The tool is lightweight, fast, and fully responsive—designed to work
        flawlessly on desktops, tablets, and mobile devices so you can convert
        anytime, anywhere.
      </p>

      <h3>Key Features</h3>
      <p>
        <strong>✔ Drag-and-Drop Upload:</strong> Simply drag your PDF into the
        drop zone or click to browse.
      </p>
      <p>
        <strong>✔ Instant Base64 Output:</strong> Get your encoded string right
        after uploading.
      </p>
      <p>
        <strong>✔ Copy to Clipboard:</strong> Quickly copy the Base64 result with
        a single click.
      </p>
      <p>
        <strong>✔ Privacy Friendly:</strong> No files are stored on our servers.
        All processing is done in-browser.
      </p>

      <h3>How to Use</h3>
      <p>
        1. Click the upload area or drag your PDF file into it. <br />
        2. The converter will process and display the Base64-encoded string. <br />
        3. Use the "Copy to Clipboard" button to save the result for your use.
      </p>

      <h3>Why Return?</h3>
      <p>
        We continuously improve this tool for speed, accuracy, and user
        satisfaction. It's perfect for developers, students, and professionals
        needing reliable Base64 conversion at their fingertips.
      </p>

      <h3>Device Compatibility</h3>
      <p>
        The tool works on all modern devices—whether you're using a phone,
        desktop, tablet, or even a smart console. Try it today and streamline
        your Base64 conversion process!
      </p>
    </div>
  );
}

export default Base64ToPDFAbout;
