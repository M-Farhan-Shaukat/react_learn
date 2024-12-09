import "./App.css";
import React, { useState } from 'react';
import NavBar from "./components/common/NavBar";
// import AboutTextUtils from "./components/textUtils/AboutTextUtils";
import TextForm from "./components/textUtils/TextForm";
// import UserForm from "./components/users/UserForm";
// import UserTable from "./components/users/UserTable";

function App() {
  const [mode ,setMode] = useState('light')
  const [switchText ,setSwitchText] = useState('Enable Dark Mode')
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      setSwitchText('Enable Light Mode')
      document.body.style.backgroundColor = "grey";
    }else{
      setMode('light')
      setSwitchText('Enable Dark Mode')
      document.body.style.backgroundColor = "white";

    }
  }
  return (
    <>
      <NavBar
        title="CVM"
        about="About us"
        home="Home"
        searchPlaceholder="Search User"
        searchButtonName="Search"
        mode ={mode}
        toggleMode = {toggleMode}
        switchText ={switchText}
        />
    <div className="container my-5">
      {/* userform is imported and user table is commented until installation of react router */}
      {/* <UserTable /> */}
      {/* <UserForm /> */}
      <TextForm mode={mode} />
      {/* <AboutTextUtils /> */}
      </div>

    </>
  );
}

export default App;
