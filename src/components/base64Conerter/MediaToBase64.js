import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";
import About from "./about/MediaToBase64About"; // Importing About section

function MediaToBase64Converter(props) {
  const [base64String, setBase64String] = useState("");
  const [fileInfo, setFileInfo] = useState(null);

  const SUPPORTED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "application/pdf",
    "audio/mpeg",
    "audio/wav",
    "audio/ogg",
    "video/mp4",
    "video/webm",
    "video/ogg",
  ];
  const MAX_FILE_SIZE_MB = 20;

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      props.showAlert("Please select a valid file.", "info");
      return;
    }

    // Validate MIME type
    if (!SUPPORTED_TYPES.includes(file.type)) {
      props.showAlert(`Unsupported file type: ${file.type}`, "warning");
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > MAX_FILE_SIZE_MB) {
      props.showAlert(
        `File is too large (${fileSizeMB.toFixed(
          2
        )} MB). Max allowed is 20 MB.`,
        "warning"
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const fullBase64 = reader.result || "";
      const cleanedBase64 = fullBase64.replace(/^data:[^;]+;base64,/, "");
      const outputSizeKB = Math.round((cleanedBase64.length * 3) / 4 / 1024); // base64 is ~33% larger
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
    <>
      <head>
        <title>
          Media to Base64 Converter – Convert Images, Audio, Video, PDF
        </title>
        <meta
          name="description"
          content="Convert media files like images, audio, video, and PDFs to Base64 encoding easily. Secure, fast, and browser-based media to Base64 converter."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Media to Base64 Converter" />
        <meta
          property="og:description"
          content="Convert your image, audio, video, or PDF file to Base64 format in seconds. Easy and free to use."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.convertpk.com/media-to-base64"
        />
        <meta
          property="og:image"
          content="https://www.convertpk.com/assets/media-to-base64.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Media to Base64 Converter" />
        <meta
          name="twitter:description"
          content="Convert images, audio, video, and PDF files to Base64 quickly and easily."
        />
        <meta
          name="twitter:image"
          content="https://www.convertpk.com/assets/media-to-base64.jpg"
        />
      </head>

      <div className="container mb-3">
        <h1
          style={{
            backgroundColor: props.mode === "light" ? "white" : "#21292C",
            color: props.mode === "light" ? "black" : "white",
            textAlign: "center",
          }}
        >
          Media to Base64 Converter
        </h1>

        <input
          type="file"
          id="media-upload"
          style={{ display: "none" }}
          onChange={handleFileUpload}
          accept={SUPPORTED_TYPES.join(",")}
        />

        <label
          htmlFor="media-upload"
          style={{
            padding: "20px",
            border: "2px dashed #ccc",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            borderRadius: "6px",
            backgroundColor: "#fafafa",
            cursor: "pointer",
          }}
        >
          <FaFileAlt size={40} color="#888" />
          <p style={{ margin: "10px 0 4px" }}>Drag or Upload your media file</p>
          <small>Supported types: Images, Audio, Video, PDF (Max 20 MB)</small>
        </label>

        {base64String && fileInfo && (
          <div className="file-info mt-4">
            <h4>File Info:</h4>
            <table className="table table-bordered table-striped">
              <tbody>
                <tr>
                  <th>Filename:</th>
                  <td>{fileInfo.name}</td>
                </tr>
                <tr>
                  <th>Input File Size:</th>
                  <td>{fileInfo.inputSize} KB</td>
                </tr>
                <tr>
                  <th>Output File Size:</th>
                  <td>{fileInfo.outputSize} KB</td>
                </tr>
                <tr>
                  <th>Input MIME Type:</th>
                  <td>{fileInfo.inputType}</td>
                </tr>
                <tr>
                  <th>Output MIME Type:</th>
                  <td>{fileInfo.outputType}</td>
                </tr>
              </tbody>
            </table>

            <div>
              <h5>Base64 String:</h5>
              <textarea
                rows="10"
                style={{ width: "100%", marginBottom: "10px" }}
                readOnly
                value={base64String}
              />
              <button
                type="button"
                onClick={copyToClipboard}
                style={{
                  width: "100%",
                  padding: "10px 20px",
                  backgroundColor: "#4CAF50",
                  color: "white",
                  border: "none",
                }}
              >
                Copy to Clipboard
              </button>
            </div>
          </div>
        )}

        <div className="about-media-container" style={{ marginTop: "30px" }}>
          <About mode={props.mode} />
        </div>
      </div>
    </>
  );
}

export default MediaToBase64Converter;
