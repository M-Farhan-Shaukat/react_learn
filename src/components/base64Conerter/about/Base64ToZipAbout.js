import React from "react";

function AboutPage(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
        padding: "30px",
        borderRadius: "10px",
        lineHeight: "1.7",
      }}
    >
      <h3>About Our Base64 to ZIP Converter Tool</h3>
      <p>
        Welcome to our Base64 to ZIP Converter, a quick and easy tool for
        decoding Base64-encoded content and converting it into downloadable ZIP
        files. Whether you're a developer, student, or tech enthusiast, our
        converter simplifies the entire process—no coding required!
      </p>

      <h3>Simple and Fast</h3>
      <p>
        Paste your Base64 string, click a button, and instantly receive a ZIP
        file ready to download. Our tool eliminates the complexity of decoding
        and archiving Base64 data manually.
      </p>

      <strong>No Uploads Required:</strong>
      <p>
        All conversions are done right in your browser. Nothing is uploaded or
        stored on our servers, ensuring your data remains private and secure.
      </p>

      <strong>Perfect for Developers & Learners:</strong>
      <p>
        If you're dealing with encoded files in APIs, debugging encoded content,
        or just experimenting with file compression, this tool is built for you.
      </p>

      <h3>How to Use</h3>
      <p>
        Using the tool is straightforward and intuitive. Simply:
        <br />
        <strong>1.</strong> Paste the Base64 string in the input box.
        <br />
        <strong>2.</strong> Click on <strong>"Generate ZIP"</strong>.
        <br />
        <strong>3.</strong> Download the ZIP file using <strong>"Download ZIP"</strong>.
      </p>

      <h3>Why Use Our Tool?</h3>
      <strong>Fast & Lightweight:</strong>
      <p>Instant conversion without any backend processing.</p>

      <strong>Fully Responsive:</strong>
      <p>Use it on any device—mobile, tablet, or desktop—with ease.</p>

      <strong>No Ads, No Bloat:</strong>
      <p>
        We keep the experience clean and distraction-free for maximum
        productivity.
      </p>

      <h3>Future Features</h3>
      <p>
        We're working on adding batch conversions, file previews, and support
        for other encoded formats. Stay tuned!
      </p>

      <h3>Access From Anywhere</h3>
      <p>
        Our tool is web-based and mobile-friendly, which means you can decode
        Base64 to ZIP anytime, anywhere, without the need to install anything.
      </p>

      <h3>Why Return?</h3>
      <p>
        We continuously update our tool with new features and enhancements based
        on user feedback. It’s a reliable solution that keeps getting better.
      </p>

      <h3>Which Devices Does It Work On?</h3>
      <p>
        The converter works perfectly on all modern devices—phones, tablets,
        laptops, and desktops. No compatibility issues, just seamless decoding.
      </p>
    </div>
  );
}

export default AboutPage;
