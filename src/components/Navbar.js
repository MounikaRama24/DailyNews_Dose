import React from "react";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";
import Settings from "./Settings";

import "./styles.css";

export default function Navbar(props) {
  
  const mstyle = {
    color: "black",
  };
  const componentstyle = {
    color: "White",
  };

  return (
    <div className="con" style={mstyle}>
      <nav
        className={`navbar navbar-expand-lg fixed-top navbar-${props.mode} bg-${props.mode}`}
      >
        <a className="navbar-brand" href="/">
          {/* Logo image goes here */}
          <img
            src="DND LOGO2.png"
            className={`my-2-${props.mode}`}
            alt="Logo"
            style={{
              maxWidth: "100px",
              maxHeight: "50px", // Set the maximum width for the logo
              height: "auto", // Automatically adjust the height to maintain aspect ratio
              borderRadius: "50%", // Make the logo circular (for example)
              border: "2px solid #333",
            }}
          />
        </a>

        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsDose
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item-" style={{ componentstyle }}>
                <Link className="nav-link" aria-current="page" to="/">
                  <b>Home</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ">
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  onClick={props.toggleMode}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.btn}
                </label>
              </div>
              <br></br>
              {/* <SearchBar/> */}
              <Settings/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
