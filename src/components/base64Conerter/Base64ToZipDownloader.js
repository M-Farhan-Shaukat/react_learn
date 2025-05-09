import React, { useState } from "react";
import { Helmet } from "react-helmet";
import About from "./about/Base64ToZipAbout"; // Assuming you want the About section as well

function Base64ToZipConverter(props) {
  const [base64String, setBase64String] = useState("");
  const [zipBlobUrl, setZipBlobUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [zipReady, setZipReady] = useState(false);

  const cleanBase64 = (input) => {
    if (!input) return "";
    let base64 = input.trim();
    if (base64.includes(",")) {
      base64 = base64.split(",")[1];
    }
    try {
      base64 = decodeURIComponent(base64);
    } catch (_) {}
    return base64.replace(/[^A-Za-z0-9+/=]/g, "");
  };

  const previewZip = () => {
    if (!base64String) {
      props.showAlert("Please paste a Base64 string!", "danger");
      return;
    }

    setLoading(true);
    setZipReady(false);

    setTimeout(() => {
      const cleanedBase64 = cleanBase64(base64String);
      try {
        const byteCharacters = atob(cleanedBase64);
        const byteArray = new Uint8Array(
          [...byteCharacters].map((c) => c.charCodeAt(0))
        );
        const blob = new Blob([byteArray], { type: "application/zip" });
        const url = URL.createObjectURL(blob);
        setZipBlobUrl(url);
        setZipReady(true);
      } catch (error) {
        console.error("Error decoding Base64:", error);
        props.showAlert("Invalid or corrupted Base64 data!", "danger");
      } finally {
        setLoading(false);
      }
    }, 1000); // simulate processing delay
  };

  const downloadZip = () => {
    if (!zipBlobUrl) return;
    const link = document.createElement("a");
    link.href = zipBlobUrl;
    link.download = "downloaded.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const isDisabled = loading;

  return (
    <div
      className="container mb-3"
      style={{
        opacity: isDisabled ? 0.5 : 1,
        pointerEvents: isDisabled ? "none" : "auto",
      }}
    >
      <head>
        <title>
          Base64 to Media Converter - Convert Base64 to Image, Audio, Video, or
          PDF
        </title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Convert Base64 encoded data to its respective format: image, audio, video, or PDF with our fast and secure Base64 to Media converter tool."
        />
        <meta
          name="keywords"
          content="Base64 to media, base64 to image, base64 to audio, base64 to video, base64 to PDF, base64 media converter, decode base64 online"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="ConvertPK" />
        <meta name="language" content="en" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Base64 to Media Converter" />
        <meta
          property="og:description"
          content="Convert Base64 encoded data to media formats like image, audio, video, or PDF."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.convertpk.com/base64-to-media"
        />
        <meta
          property="og:image"
          content="https://www.convertpk.com/assets/base64-to-media-og.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Base64 to Media Converter" />
        <meta
          name="twitter:description"
          content="Convert Base64 to image, audio, video, or PDF easily with our free Base64 to Media converter."
        />
        <meta
          name="twitter:image"
          content="https://www.convertpk.com/assets/base64-to-media-twitter.jpg"
        />
        <link
          rel="icon"
          type="image/png"
          href="/images/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />
      </head>

      <h2
        style={{
          backgroundColor: props.mode === "light" ? "white" : "#21292C",
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        Base64 to ZIP Converter
      </h2>

      <textarea
        className="form-control"
        rows="10"
        placeholder="Paste your Base64 ZIP string here..."
        value={base64String}
        onChange={(e) => {
          setBase64String(e.target.value);
          setZipBlobUrl("");
          setZipReady(false);
        }}
        disabled={loading}
      />

      <div style={{ marginTop: "10px" }}>
        <button
          onClick={previewZip}
          style={{
            padding: "10px 20px",
            backgroundColor: "#2196F3",
            color: "white",
            border: "none",
            marginRight: "10px",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate ZIP"}
        </button>
      </div>

      {loading && (
        <div style={{ marginTop: "15px" }}>
          <div className="spinner-border text-primary" role="status"></div>{" "}
          Generating ZIP...
        </div>
      )}

      {zipReady && !loading && (
        <div style={{ marginTop: "20px" }}>
          <h3
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#21292C",
              color: props.mode === "light" ? "black" : "white",
            }}
          >
            ZIP is ready to be downloaded
          </h3>
          <a
            href={zipBlobUrl}
            download="preview.zip"
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
          >
            Click here to Download Preview ZIP
          </a>
        </div>
      )}

      <div className="about-container">
        <About mode={props.mode} />
      </div>
    </div>
  );
}

export default Base64ToZipConverter;
