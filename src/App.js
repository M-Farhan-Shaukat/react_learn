import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/common/NavBar";
import AboutTextUtils from "./components/textUtils/AboutTextUtils";
import TextForm from "./components/textUtils/TextForm";
import Alert from "./components/common/Alert";
import { Navigate, Route, Routes } from "react-router-dom";
import UserForm from "./components/users/UserForm";
import UserTable from "./components/users/UserTable";
import { Helmet } from 'react-helmet';
import Base64ToPdfConverter from "./components/base64Conerter/Base64ToPdf";
import PdfToBase64Converter from "./components/base64Conerter/PdfToBase64";
import Base64ToMediaConverter from "./components/base64Conerter/Base64ToMedia";
import MediaToBase64Converter from "./components/base64Conerter/MediaToBase64";
import VideoToAudioConverter from "./components/MediaConverter/VideoToAudioConverter";
import TextToSpeech from "./components/textUtils/TextToSpeech";

function App() {
  const [mode, setMode] = useState("light");
  const [switchText, setSwitchText] = useState("Enable Dark Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setSwitchText("Enable Light Mode");
      document.body.style.backgroundColor = "#21292C";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      setSwitchText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };
  const NavHeadings = {
    users: "Users",
    about: "About us",
    home: "Chracter counter",
    base64topdf: "Base64 to PDF",
    pdftobase64: "PDF to Base64",
    mediatobase64: "Media to Base64",
    base64tomedia: "Base64 to Media",
    videotoaudio: "Video to MP3",
    texttospeech: "Text To Speech",
  };

  return (
    <>
         <title>Character Counter - Count Characters Instantly</title>
     
      <NavBar
        title="CC"
        NavHeadings={NavHeadings}
        searchPlaceholder="Search User"
        searchButtonName="Search"
        mode={mode}
        toggleMode={toggleMode}
        switchText={switchText}
      />
      <div className="container my-2">
            <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<Navigate to="/character-counter" />}
          />
          <Route path="/character-counter" element={<TextForm showAlert={showAlert} mode={mode} />} />
          <Route exact path="/about" element={<AboutTextUtils mode={mode} />} />
          <Route exact path="/users" element={<UserTable mode={mode}/>} />
          <Route exact path="/create-user" element={<UserForm mode={mode}/>} />

          <Route exact path="/base64-pdf" element={<Base64ToPdfConverter showAlert={showAlert}  mode={mode}/>} />
          <Route exact path="/pdf-base64" element={<PdfToBase64Converter showAlert={showAlert}  mode={mode}/>} />
          <Route exact path="/base64-media" element={<Base64ToMediaConverter showAlert={showAlert}  mode={mode}/>} />
          <Route exact path="/media-base64" element={<MediaToBase64Converter showAlert={showAlert}  mode={mode}/>} />
          <Route exact path="/video-audio" element={<VideoToAudioConverter showAlert={showAlert}  mode={mode}/>} />
          <Route exact path="/text-speech" element={<TextToSpeech showAlert={showAlert}  mode={mode}/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
