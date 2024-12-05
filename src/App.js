import "./App.css";
import NavBar from "./components/common/NavBar";
import UserForm from "./components/users/UserForm";
import UserTable from "./components/users/UserTable";

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
      <UserForm />
      </div>

    </>
  );
}

export default App;
