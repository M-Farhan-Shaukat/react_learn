import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons from react-icons

function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">{props.NavHeadings.home}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.NavHeadings.about}</Link>
                        </li>
                    </ul>

                    {/* Sun/Moon Icon Toggle */}
                    <div 
                        className={`text-${props.mode === 'light' ? 'dark' : 'light'}`} 
                        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '15px', marginRight: '10px' }}
                        onClick={props.toggleMode}
                    >
                        {props.mode === 'light' 
                            ? <FaMoon color="#4A4A4A" title="Switch to Dark Mode" /> 
                            : <FaSun color="#FFD700" title="Switch to Light Mode" />
                        }
                        <span className="ms-2">{props.switchText}</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    NavHeadings: PropTypes.object.isRequired,
    switchText: PropTypes.string,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};
