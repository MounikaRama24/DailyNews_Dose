// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className="navbar-brand" href="/">
          <img
            src="DND LOGO2.png"
            className={`my-2-${props.mode}`}
            alt="Logo"
            style={{
              maxWidth: "100px",
              maxHeight: "50px",
              height: "auto",
              borderRadius: "50%",
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
              {/* Add your navigation links here */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* Add more navigation links here */}
            </ul>
            <div className="d-flex align-items-center">
              <div
                className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
              >
                <input
                  className="form-check-input"
                  onChange={props.toggleMode}
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                  {props.btn}
                </label>
              </div>
              <br></br>
              <div className="ms-3">
                {/* Add more settings or components here */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
