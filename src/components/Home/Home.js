import React, { useState } from "react";
import "./Home.css";
import logo from "../../img/logo.png";

function Home() {
  // Toogle Menu
  const [show, setShow] = useState(true);
  return (
    <div className="home home__bg" id="Home">
      <nav className="navbar navbar-expand-lg navbar-dark header fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img
              src={logo}
              alt=""
              width="60"
              height="30"
              className="d-inline-block align-text-top"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a
                  className="nav-link c__link"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link c__link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link c__link" href="#project">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link c__link"
                  href="#contact"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* HOME CONTENT */}
      <div className="container">
        <div className="home__content">
          <div className="home__meta">
            <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
            <h2 className="home__text pz__10">Hi, I’m Md. Jahirul</h2>
            <h3 className="home__text sweet pz__10">JS Developer.</h3>
            <div className="about__button d__flex align__items__center">
              <a href="https://drive.google.com/file/d/1mwQ892Q1MgcHgYkv_QS-_aflG5tcXr-p/view?usp=sharing&export=download">
                <button className="about btn pointer">Download Cv</button>
              </a>

              <a href="#Contact">
                <button className="about btn pointer">Hire Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
