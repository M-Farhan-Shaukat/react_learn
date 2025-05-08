import React from "react";

function AboutMediaToBase64Converter(props) {
  return (
    <div className="about-section" style={{ marginTop: "30px" }}>
      <h2
        style={{
          color: props.mode === "light" ? "black" : "white",
          textAlign: "center",
        }}
      >
        About the Media to Base64 Converter
      </h2>

      <p
        style={{
          color: props.mode === "light" ? "black" : "white",
          textAlign: "center",
          fontSize: "16px",
        }}
      >
        This tool allows you to convert media files (such as images, audio, video, or PDF) into a Base64 encoded string. This can be useful for embedding files directly into web pages or transferring data in a text-based format.
      </p>

      <h3
        style={{
          color: props.mode === "light" ? "black" : "white",
          textAlign: "center",
        }}
      >
        How it works:
      </h3>
      <ul
        style={{
          color: props.mode === "light" ? "black" : "white",
          listStyleType: "disc",
          paddingLeft: "20px",
        }}
      >
        <li>Upload your media file.</li>
        <li>The file will be converted to a Base64 string.</li>
        <li>View and copy the Base64 string to your clipboard.</li>
      </ul>

      <h3
        style={{
          color: props.mode === "light" ? "black" : "white",
          textAlign: "center",
        }}
      >
        Why Use This Tool?
      </h3>
      <ul
        style={{
          color: props.mode === "light" ? "black" : "white",
          listStyleType: "disc",
          paddingLeft: "20px",
        }}
      >
        <li>Quick and easy conversion of media files to Base64</li>
        <li>No software installation required</li>
        <li>Free to use with a simple interface</li>
        <li>Supports various media formats</li>
      </ul>
    </div>
  );
}

export default AboutMediaToBase64Converter;
