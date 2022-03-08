import React from "react";
import { SiDiscord } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";

import "./footers.css";

const Footers = () => {
  return (
    <>
      <div className="first-footer">
        <div className="container">
          <div className="col-md-12 footer-main-section">
            <div className="">
              <span className=" Footer-logo-style  ">META STREET APES</span>
            </div>
            <div className="col-md-8 footer-content-style">
              <div className="footer-icon-nav">
              <a href="https://discord.gg/c6KVnyUX" title="" target="_blank">
                  <div className="footer-icons">
                    <SiDiscord size={35} />
                  </div>
                </a>
                <a href="https://twitter.com/metastreetapes" title="" target="_blank">
                  <div className="footer-icons">
                    <BsTwitter size={35} />
                  </div>
                </a>

                <a href="https://www.instagram.com/metastreetapes/?utm_medium=copy_link" title="" target="_blank">
                  <div className="footer-icons">
                    <FiInstagram size={35} />
                  </div>
                </a>
              </div>
              <div className="footer-icons copy-right-color">
                © 2021 META STREET APES | All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footers;
