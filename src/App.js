import "./App.css";
import React, { useState } from "react";
import NavBar from "./components/common/NavBar";
import AboutTextUtils from "./components/textUtils/AboutTextUtils";
import TextForm from "./components/textUtils/TextForm";
import Alert from "./components/common/Alert";
import { Route, Routes } from "react-router-dom";
import UserForm from "./components/users/UserForm";
import UserTable from "./components/users/UserTable";

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
      document.body.style.backgroundColor = "#0b2240";
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
    home: "Home",
  };

  return (
    <>
      <NavBar
        title="CVM"
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
            element={<TextForm showAlert={showAlert} mode={mode} />}
          />
          <Route exact path="/about" element={<AboutTextUtils mode={mode} />} />
          <Route exact path="/users" element={<UserTable />} />
          <Route exact path="/create-user" element={<UserForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
