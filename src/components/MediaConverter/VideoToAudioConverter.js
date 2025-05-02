import React, { useState } from "react";
import { convertVideoToAudio } from "../../utils/cloudconvertService";
import { FaFileAlt } from "react-icons/fa";

export default function VideoToAudioCloudConvert({ mode = "light", showAlert }) {
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setFileInfo({
      name: file.name,
      type: file.type,
      size: Math.round(file.size / 1024), // Convert size to KB
    });

    setLoading(true);
    try {
      const url = await convertVideoToAudio(file);
      setAudioUrl(url);
      showAlert?.("Conversion successful!", "success");
    } catch (error) {
      console.error("Conversion failed:", error);
      showAlert?.("Conversion failed. Check the console for details.", "danger");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto", position: "relative" }}>
      {/* Title */}
      <h2
        style={{
          backgroundColor: mode === "light" ? "white" : "#21292C",
          color: mode === "light" ? "black" : "white",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Video to MP3 Converter
      </h2>

      {/* File input section */}
      <input
        type="file"
        accept="video/*"
        id="video-upload"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <label
        htmlFor="video-upload"
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
          transition: "background-color 0.3s",
        }}
      >
        <FaFileAlt size={40} color="#888" />
        <p style={{ margin: "10px 0 4px" }}>Drag or Upload your video file</p>
        <small>Accepted: MP4, WebM, etc.</small>
      </label>

      {/* Loader */}
      {loading && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "18px",
            pointerEvents: "none", // Disable interaction with the page during loading
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div className="loader"></div>
            <p>Converting to MP3, please wait...</p>
          </div>
        </div>
      )}

      {/* File Information Table */}
      {fileInfo && (
        <table className="table table-bordered table-striped mt-3">
          <tbody>
            <tr>
              <th scope="row">Filename:</th>
              <td>{fileInfo.name}</td>
            </tr>
            <tr>
              <th scope="row">File Size:</th>
              <td>{fileInfo.size} KB</td>
            </tr>
            <tr>
              <th scope="row">MIME Type:</th>
              <td>{fileInfo.type}</td>
            </tr>
          </tbody>
        </table>
      )}

      {/* Audio Player and Download Link */}
      {audioUrl && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <audio controls src={audioUrl} className="w-100 my-3 p-2 rounded shadow-lg" style={{ maxWidth: '500px' }} />
          <br />
          <a
            href={audioUrl}
            download="output.mp3"
            className="btn btn-primary mt-3"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "10px 20px",
              fontSize: "16px",
            }}
          >
            Download MP3
          </a>
        </div>
      )}
    </div>
  );
}
