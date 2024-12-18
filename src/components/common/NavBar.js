import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function NavBar(props) {
  {console.log(props.NavHeadings)}
    return (
        <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}` }>
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
        {/* <li className="nav-item">
          <Link className="nav-link" to="/users">{props.NavHeadings.users}</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className={`form-control me-2 bg-${props.mode}`} type="search" placeholder={props.searchPlaceholder} aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">{props.searchButtonName}</button>
      </form> */}
      <div className="form-check form-switch">
<div className={`text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode  } role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.switchText}</label>
</div>

</div>

    </div>
  </div>
</nav>
    )
}

export default NavBar

NavBar.prototype={
    title:PropTypes.string.isRequired,
    home:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired,
    searchPlaceholder:PropTypes.string,
    searchButtonName:PropTypes.string,
}
// NavBar.defaultProps ={
//     title:"Title here",
//     about :"About here",
//     home: "Home",
//     searchPlaceholder:"Search....",
//     searchButtonName : "Search"
    
// 