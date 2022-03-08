import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import "jquery-syotimer";
import "./comNav.css";

import jQueryBridget from "jquery-bridget";
import jQuery from "jquery";

// import './script.js'
// import './navbar.css'
import { NavbarLogo } from "../../utils/allImgs";
import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
// import data from '../../data/data-layouts/data-Head.json'

function ComNav({ Title }) {
  const slideOpen = () => {
    document.getElementById("nav-bar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("nav-bar").style.display = "none";
  };
  useEffect(() => {
    Addshrink();
  }, [window.pageYOffset]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-white fixed-top"
        id="banner"
      >
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <span>
              <span className="  navbar-collapse .nav-item .nav-link ">
                META STREET APES
              </span>
            </span>
          </NavLink>

          <button
            onClick={slideOpen}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav-bar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item closeData">
                <button className="nav-link close-button" onClick={slideClose}>
                  Close
                </button>
              </li>
              <li className="nav-item  head-margin">
                <NavLink className="nav-link" to="/home/aboutus">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item  head-margin">
                <NavLink className="nav-link" to="/home/mindmap">
                  Mind Map
                </NavLink>
              </li>
              <li className="nav-item  head-margin">
                <NavLink className="nav-link" to="/home/teamSection">
                  Team
                </NavLink>
              </li>
              <li className="nav-item head-margin">
                <Link className="nav-link" to="/home/faqSection">
                  FAQ
                </Link>
              </li>
              <li className="nav-item head-margin">
                <button className="btn  more-btn  head-margin">
                  Join our discord
                </button>
              </li>
              <div className="nav-social-icons-style">
                <li className="nav-item head-margin header-icon-style">
                  <a href="https://twitter.com/metastreetapes" title="">
                    <BsTwitter size={35} />
                  </a>
                </li>
                <li className="nav-item head-margin header-icon-style">
                  <a href="https://www.instagram.com/metastreetapes/?utm_medium=copy_link" title="">
                    <FiInstagram size={35} />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ComNav;
