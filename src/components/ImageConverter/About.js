import React from "react";

function About(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
        padding: '20px',
        marginTop: '20px',
        borderRadius: '6px',
        maxHeight: '90vh', 
        overflowY: 'auto',
      }}
    >
      <h3>About Image Format Converter</h3>
      <p>
        The Image Format Converter is a simple and efficient tool that allows users to convert images
        from one format to another, including PNG, JPG, WebP, and GIF. It is fast, easy to use, and does
        not require any additional software or installation. Just upload your image, choose the format
        you want to convert it to, and download the result!
      </p>
      <p>
        This tool works entirely in your browser, providing instant conversion without compromising
        the quality of your images. It is ideal for use when you need to convert images quickly for
        use in web applications, presentations, or other projects.
      </p>
      <p style={{ fontSize: '14px'}}>
        <strong>Note:</strong> You can only convert supported image formats (PNG, JPG, WebP, GIF).
      </p>

      <h3>How It Works</h3>
      <p>
        Simply upload an image, select the format you'd like to convert it to (PNG, JPG, WebP, GIF), and
        let the tool handle the rest. The conversion is performed entirely in your browser, ensuring fast
        and secure results.
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>Fast, browser-based conversion</li>
        <li>Supports PNG, JPG, WebP, and GIF formats</li>
        <li>No additional software or installation required</li>
        <li>Preserves image quality</li>
      </ul>

      <h3>Why Choose This Tool?</h3>
      <p>
        This tool is designed to be simple, fast, and reliable. Whether you're a developer, designer, or just
        someone needing a quick image format conversion, this tool makes the process straightforward and
        efficient.
      </p>

      <h3>Supported Formats:</h3>
      <ul>
        <li>PNG</li>
        <li>JPG</li>
        <li>WebP</li>
        <li>GIF</li>
      </ul>

      <h3>Convert Your Images in Seconds</h3>
      <p>
        No more downloading third-party applications or waiting for slow server-side processing. Our tool
        converts your images instantly and efficiently, saving you time and effort.
      </p>

      <p>
        <strong>Access it from anywhere:</strong> Whether you’re at home, work, or on the go, you can rely
        on our tool to get the job done quickly and efficiently, right from your browser.
      </p>

      <h3>Why Return?</h3>
      <p>
        We're constantly improving our tool, adding new features and supporting additional formats, ensuring
        you have the best image conversion experience. Whether you’re a casual user or a professional, this
        tool has something for everyone.
      </p>

      <h3>Supported Devices</h3>
      <p>
        The Image Format Converter is fully responsive, meaning you can use it on any device – mobile, tablet,
        or desktop – without issues.
      </p>
    </div>
  );
}

export default About;
