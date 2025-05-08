import React from "react";

function AboutMediaToBase64Converter(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <h3>About the Media to Base64 Converter</h3>
      <p>
        Welcome to our Media to Base64 Converter tool—an essential utility for developers, designers, and content creators who need to encode media into Base64 format quickly and efficiently. This tool simplifies the process of embedding media directly into your code or transmitting files via APIs or web forms.
      </p>

      <h3>Why Use Base64 Encoding?</h3>
      <p>
        Base64 encoding allows you to convert binary files like images, audio, videos, and PDFs into a text-based format. This is particularly helpful for embedding files into HTML, CSS, or JSON without needing to store them separately.
      </p>

      <h3>Key Features:</h3>
      <p><strong>✔️ Supports Multiple Formats:</strong> Convert images, audio, videos, and PDFs with ease.</p>
      <p><strong>✔️ Fast & Secure:</strong> All processing is done client-side, ensuring your files remain private.</p>
      <p><strong>✔️ No Installation Needed:</strong> Completely browser-based—no downloads or extensions required.</p>
      <p><strong>✔️ Simple Copy Function:</strong> Easily copy your Base64 string with one click.</p>

      <h3>How It Works:</h3>
      <ol>
        <li>Upload your media file using the upload interface.</li>
        <li>The file is instantly converted into a Base64 encoded string.</li>
        <li>Preview and copy the encoded string for use in your projects.</li>
      </ol>

      <h3>Use Cases:</h3>
      <p>
        Whether you're a developer embedding an image in CSS, a designer working on email templates, or a student building a static site, this tool is made to support you.
      </p>

      <h3>Access Anywhere, Anytime</h3>
      <p>
        The converter is fully responsive and works perfectly on mobile, tablet, and desktop devices. Use it at home, at work, or on the go.
      </p>

      <h3>Why Return?</h3>
      <p>
        We are committed to enhancing the tool with new features, better performance, and improved compatibility. Bookmark it for future projects—you’ll always have a reliable Base64 encoder at your fingertips.
      </p>

      <h3>Compatible File Types:</h3>
      <p>
        🖼️ JPG, PNG, GIF & SVG | 🎵 MP3, WAV | 📹 MP4, WEBM | 📄 PDF and more
      </p>
    </div>
  );
}

export default AboutMediaToBase64Converter;
