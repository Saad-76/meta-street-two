import { React, useEffect } from "react";
import SectionInfo from "../SectionInfo/sectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import InfoComponent from "../InfoComponent";
import "./aboutUs.css";
import { useLocation } from "react-router-dom";
// import BackgroundVideoA from "../../assets/img/test-img/BackgroundVideo.mp4"
import Ren55 from "../../assets/img/test-img/ren_55.png";
import Monkey1 from "../../assets/img/test-img/Monkey1.jpg";
import AboutMonkey from "../../assets/img/test-img/AboutMonkey.png";
import Spider_Ape from "../../assets/img/test-img/Spider_Ape.png";
import DiamondCopy from "../../assets/img/test-img/DiamondCopy.png";

const AboutUs = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);

  return (
    <>
      <div className="about-top-pad">
        {/* <InfoComponent
          titleSm="A collection of 8888 avatars"
          titleLg=" About Us. 
              "
          text="  Avatars that give you membership access.
              "
        /> */}

        <div className="container">
          <div className="col-md-12 about-main-section-style">
            <div className="col-md-6 about-content-section">
              <h3>ABOUT US </h3>

              <p>
                <b>8888-Hyper Realistic Bold APES</b>
                <br />
                <b> Meta Street Apes</b> is a brand.
                <br />A new kind of brand that we build together.
                <br />A brand for the metaverse. By the community.
              </p>

              <p className="para-content">
                A collection of 8888 avatars that give you membership access to
                members-only exclusive benefits and sets up{" "}
                <b>Meta Street Apes</b> as next-generation fashion leaders. It
                starts with exclusive street wear collabs, NFT drops, live
                events, and much more that will be revealed over time. Community
                ownership in <b>Meta Street Apes</b> allows for a new genre of
                media which the world has yet to explore.
                <b> Meta Street Apes</b> is your identity in the metaverse —
                let's build together.
              </p>
            </div>
            <div className="col-md-6 about-image  ">
              <img src={DiamondCopy} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
