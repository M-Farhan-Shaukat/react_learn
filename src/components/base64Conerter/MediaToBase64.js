import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

function MediaToBase64Converter(props) {
  const [base64String, setBase64String] = useState("");
  const [fileInfo, setFileInfo] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      props.showAlert("Please select a valid file.", "info");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fullBase64 = reader.result || "";

      const cleanedBase64 = fullBase64.replace(/^data:[^;]+;base64,/, "");
      const outputSizeKB = Math.round((cleanedBase64.length * 3) / 4 / 1024); // Base64 is ~33% larger
      const inputSizeKB = Math.round(file.size / 1024);

      setFileInfo({
        name: file.name,
        inputType: file.type,
        outputType: fullBase64.substring(5, fullBase64.indexOf(";")),
        inputSize: inputSizeKB,
        outputSize: outputSizeKB,
        downloadUrl: fullBase64,
      });

      setBase64String(cleanedBase64);
    };

    reader.readAsDataURL(file);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(base64String).then(() => {
      props.showAlert("Base64 copied to clipboard!", "success");
    });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#21292C",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        Media File to Base64 Converter
      </h2>

      {/* Hidden Input */}
      <input
        type="file"
        id="media-upload"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />

      {/* Styled Label as Upload Box */}
      <label
        htmlFor="media-upload"
        style={{
          border: "2px dashed #ccc",
          padding: "40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          borderRadius: "6px",
          backgroundColor: "#fafafa",
        }}
      >
        <FaFileAlt size={40} color="#888" />
        <p style={{ margin: "10px 0 4px" }}>Drag or Upload your media file</p>
        <small>All file types supported</small>
      </label>

      {base64String && fileInfo && (
        <>
          <h4
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#21292C",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            Base64 string of: {fileInfo.name}
          </h4>

          <table className="table table-bordered table-striped mt-3">
            <tbody>
              <tr>
                <th scope="row">Input Filename:</th>
                <td>{fileInfo.name}</td>
              </tr>
              <tr>
                <th scope="row">Input File Size:</th>
                <td>{fileInfo.inputSize} KB</td>
              </tr>
              <tr>
                <th scope="row">Output File Size:</th>
                <td>{fileInfo.outputSize} KB</td>
              </tr>
              <tr>
                <th scope="row">Input MIME Type:</th>
                <td>{fileInfo.inputType}</td>
              </tr>
              <tr>
                <th scope="row">Output MIME Type:</th>
                <td>{fileInfo.outputType}</td>
              </tr>
            </tbody>
          </table>

          <textarea
            rows="10"
            style={{ width: "100%" }}
            readOnly
            value={base64String}
          />
          <button
            onClick={copyToClipboard}
            style={{
              marginTop: "10px",
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              cursor: "pointer",
            }}
          >
            Copy to Clipboard
          </button>
        </>
      )}
    </div>
  );
}

export default MediaToBase64Converter;
