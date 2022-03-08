import React, { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

import $ from "jquery";
import "jquery-syotimer";

import jQueryBridget from "jquery-bridget";
import jQuery from "jquery";

import "./script.js";
import "./navbar.css";
import { NavbarLogo } from "../../utils/allImgs";
import HeroContainer from "../../containers/Home/Hero/index";
import TopCollectionsContainer from "../../components/TopCollections/index";
import ListedItemsContainer from "../../components/ListedItems/index";
import Footer from "../Footer/index";
import AboutUs from "../../components/About/aboutUs";
import MindMapCards from "../../components/mindMapCards/mindMapCards";
import TeamSection from "../../components/Team-Section/teamSection";

import { Addshrink } from "../../utils";
import Preloader from "../../components/Preloader";
import data from "../../data/data-layouts/data-Head.json";
import Discord from "../../components/Discord/discord.js";
import Footers from "../../components/Footers/footers.js";
import JoinSection from "../../components/JoinSection/joinSection";
import Manifesto from "../../components/Manifesto/manifesto.js";
import FAQ from "../../components/FAQ/faq.js";
import ScrollCards from "../../components/Scroll-Cards/scrollCards.js";
import { useLocation } from "react-router-dom";


import { FiInstagram } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";

function Head({ Title }) {


  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 2);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);



  useEffect(() => {
    Addshrink();
  }, [window.pageYOffset]);

  const homeRef = useRef();
  const manifestoRef = useRef();

  const teamRef = useRef();
  const mindmapRef = useRef();
  const aboutusRef = useRef();
  const contactusRef = useRef();
  const teamSectionRef = useRef();
  // const faqSectionRef = useRef();
  const { anchorId } = useParams();
  console.log(anchorId);

  const slideOpen = () => {
    // document.getElementById("mySidebar").style.display = "block";
    if(   document.getElementById("mySidebar").style.display == "block"){
      return document.getElementById("mySidebar").style.display = "none";
    }
    else{

   return   document.getElementById("mySidebar").style.display = "block";

    }
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  useEffect(() => {
    if (anchorId === "homey") homeRef.current.scrollIntoView();
    if (anchorId === "manifesto") manifestoRef.current.scrollIntoView();
    if (anchorId === "team") teamRef.current.scrollIntoView();
    if (anchorId === "mindmap") mindmapRef.current.scrollIntoView();
    if (anchorId === "aboutus") aboutusRef.current.scrollIntoView();
    if (anchorId === "contactus") contactusRef.current.scrollIntoView();
    if (anchorId === "teamSection") teamSectionRef.current.scrollIntoView();
    // if (anchorId === "faqSection") faqSectionRef.current.scrollIntoView();
  }, [anchorId]);

  return (
    <>
      <nav
        className=" navbar navbar-expand-lg  navbar-white  fixed-top shrink"
        id="banner"
      >
        <div className="container nav-style">
          <Link className="navbar-brand" to="/">
            <span>
              <span className="  navbar-collapse .nav-item .nav-link ">
                META STREET APES
              </span>
            </span>
          </Link>


          <button
            onClick={slideOpen}
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
          >
            <span className="navbar-toggler-icon" ></span>
          </button>



          <div className="collapse navbar-collapse" id="mySidebar">
            <ul className="navbar-nav  ml-auto">
              {/* <li className="nav-item head-margin closeData">
                <button className="nav-link close-button" onClick={slideClose}>
                  Close
                </button>
              </li> */}
              <li className="nav-item head-margin">
                <AnchorLink className="nav-link" href="#aboutus">
                  About Us
                </AnchorLink>
              </li>
              <li className="nav-item head-margin">
                <AnchorLink className="nav-link" href="#mindmap">
                  Mind Map
                </AnchorLink>
              </li>

              <li className="nav-item head-margin">
                <AnchorLink className="nav-link" href="#teamSection">
                  Team
                </AnchorLink>
              </li>
              <li className="nav-item head-margin">
                <AnchorLink className="nav-link" href="#faqSection">
                  FAQ
                </AnchorLink>
              </li>

              <li className="nav-item head-margin">
                <a href="https://discord.gg/c6KVnyUX" title="" target="_blank">
                  <button className="btn  more-btn">Join our discord</button>
                </a>
              </li>
              <div className="nav-social-icons-style">
                <li className="nav-item head-margin header-icon-style">
                  <a href="https://twitter.com/metastreetapes" title="" target="_blank">
                    <BsTwitter size={35} />
                  </a>
                </li>
                <li className="nav-item head-margin header-icon-style">
                  <a href="https://www.instagram.com/metastreetapes/?utm_medium=copy_link" title="" target="_blank">
                    <FiInstagram size={35} />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>

      <div className="all-sections">
        <section id="home" ref={homeRef}>
          <HeroContainer />
        </section>
        <section id="aboutus" ref={aboutusRef}>
          <AboutUs />
        </section>
        <section>
          <Manifesto />
        </section>
        <section id="mindmap" ref={mindmapRef}>
          {/* <MindMapCards /> */}
          <ScrollCards />
        </section>
        <section id="teamSection" ref={teamSectionRef}>
          <TeamSection />
        </section>

        <section id="faqSection">
          <FAQ />
          
        </section>

        <section>
          <JoinSection />
        </section>

        <section id="contactus" ref={contactusRef}>
          <Footers />
        </section>
      </div>
    </>
  );
}

export default Head;
