import "./App.css";
import NavBar from "./components/common/NavBar";
// import AboutTextUtils from "./components/textUtils/AboutTextUtils";
import TextForm from "./components/textUtils/TextForm";
// import UserForm from "./components/users/UserForm";
// import UserTable from "./components/users/UserTable";

function App() {
  return (
    <>
      <NavBar
        title="CVM"
        about="About us"
        home="Home"
        searchPlaceholder="Search User"
        searchButtonName="Search"
        />
    <div className="container my-5">
      {/* userform is imported and user table is commented until installation of react router */}
      {/* <UserTable /> */}
      {/* <UserForm /> */}
      <TextForm />
      {/* <AboutTextUtils /> */}
      </div>

    </>
  );
}

export default App;
