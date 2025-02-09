import { Outlet } from "react-router-dom";

import "./Navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faUser,  faHome, faAlignJustify, faAddressBook, faBookmark } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-light bg-gradient">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            Julian J
          </a>
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
            <ul className="navbar-nav ms-auto ms-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link">
                <FontAwesomeIcon className="icons" icon={faHome} />
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/About" className="nav-link">
                <FontAwesomeIcon className="icons" icon={faUser} />
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="/Portfolio" className="nav-link">
                <FontAwesomeIcon className="icons" icon={faAlignJustify} />
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a href="/Experience" className="nav-link">
                <FontAwesomeIcon className="icons" icon={faBookmark} />
                  Experiences
                </a>
              </li>
              <li className="nav-item">
                <a href="/Contact" className="nav-link">
                <FontAwesomeIcon className="icons" icon={faAddressBook} />
                  Contacts
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
