import React from "react";
import { Link } from "react-router-dom";

const NavBar=()=> {
  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-blue">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            {/* <div>  <img
                src="public/icon.png"
                alt="logo"
                style={{ maxWidth: "200px" }}
                className="img-fluid/"
              /> </div> */}
              ★彡 𝔑𝔢𝔴𝔰 𝔑𝔞𝔱𝔦𝔬𝔫 彡★
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li>
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
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
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="text-center fixed-bottom text-dark p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2023 Copyright: Aditi Rastogi
        
        </div>
      </div>
    )
  
}
export default NavBar;