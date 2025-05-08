import React from "react";

function Base64ToMediaAbout(props) {
  return (
    <div
      style={{
        backgroundColor: props.mode === "light" ? "white" : "#21292C",
        color: props.mode === "light" ? "black" : "white",
        padding: "20px",
        borderRadius: "8px",
      }}
    >
      <h3>About the Base64 to Media Converter</h3>
      <p>
        Welcome to our Base64 to Media Converter — a smart, browser-based tool
        designed to instantly decode Base64 strings into their original media
        formats. Whether you're a developer, designer, or everyday user, this
        tool streamlines the conversion process without requiring server-side
        processing.
      </p>

      <h3>Supported Formats:</h3>
      <strong>Images:</strong>
      <p>Convert Base64 to images like JPEG, PNG, and GIF for instant viewing or downloading.</p>

      <strong>Audio:</strong>
      <p>Decode Base64 audio to formats such as WAV and OGG for playback or use in projects.</p>

      <strong>Video:</strong>
      <p>Turn Base64 video strings into playable MP4 content directly in your browser.</p>

      <strong>PDF:</strong>
      <p>Convert Base64 strings into viewable and downloadable PDF documents.</p>

      <h3>Key Features:</h3>
      <strong>Instant Preview:</strong>
      <p>View decoded media directly in the browser before downloading.</p>

      <strong>Safe & Private:</strong>
      <p>This tool runs completely in your browser—no data is sent to any server.</p>

      <strong>Download Support:</strong>
      <p>Once decoded, you can easily download the media file to your device.</p>

      <h3>How to Use:</h3>
      <p>
        Simply paste your Base64 string into the input area, and click on
        "Preview Media" to view it, or "Download Media" to save it. It works
        instantly and supports a wide range of formats.
      </p>

      <h3>Important Note:</h3>
      <p style={{ fontStyle: "italic", fontSize: "0.9rem" }}>
        <strong>Tip:</strong> Make sure your Base64 string includes the proper
        media type prefix (e.g., <code>data:image/png;base64,...</code>). Very
        large Base64 strings may take more time to process.
      </p>

      <h3>Why Use This Tool?</h3>
      <p>
        Whether you're debugging, building web apps, or converting user uploads,
        our tool provides a fast and reliable way to handle Base64 media. Save
        time, simplify your workflow, and keep your data safe—all from your
        browser.
      </p>

      <h3>Works on All Devices</h3>
      <p>
        Fully responsive and mobile-friendly—use this tool on your desktop,
        tablet, or phone anytime, anywhere.
      </p>
    </div>
  );
}

export default Base64ToMediaAbout;
