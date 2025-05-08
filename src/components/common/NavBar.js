import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

function NavBar(props) {
  const collapseRef = useRef(null);
  const location = useLocation();

  // Closes the navbar collapse menu
  const closeNavbar = () => {
    const collapse = collapseRef.current;
    if (collapse && collapse.classList.contains("show")) {
      new window.bootstrap.Collapse(collapse, { toggle: false }).hide();
    }
  };

  // Close on outside click
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        collapseRef.current &&
        collapseRef.current.classList.contains("show") &&
        !collapseRef.current.contains(event.target)
      ) {
        closeNavbar();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Close on route change
  React.useEffect(() => {
    closeNavbar();
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
  <img
    src="/images/icons/favicon-32x32.png"
    alt="Logo"
    style={{ height: "40px", objectFit: "contain" }}
  />
</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          ref={collapseRef}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                {props.NavHeadings.home}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/base64-pdf">
                {props.NavHeadings.base64topdf}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/base64-zip">
                {props.NavHeadings.base64tozip}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/base64-media">
                {props.NavHeadings.base64tomedia}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/pdf-base64">
                {props.NavHeadings.pdftobase64}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/zip-base64">
                {props.NavHeadings.ziptobase64}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/media-base64">
                {props.NavHeadings.mediatobase64}
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/video-audio">
                {props.NavHeadings.videotoaudio}
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/text-speech">
                {props.NavHeadings.texttospeech}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.NavHeadings.about}
              </Link>
            </li>
          </ul>

          {/* Sun/Moon Icon Toggle */}
          <div
            className={`text-${props.mode === "light" ? "dark" : "light"}`}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: "15px",
              marginRight: "10px",
            }}
            onClick={() => {
              props.toggleMode();
              closeNavbar(); // Optional: also close on mode toggle
            }}
          >
            {props.mode === "light" ? (
              <FaMoon color="#4A4A4A" title="Switch to Dark Mode" />
            ) : (
              <FaSun color="#FFD700" title="Switch to Light Mode" />
            )}
            <span className="ms-2">{props.switchText}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  NavHeadings: PropTypes.object.isRequired,
  switchText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default NavBar;
