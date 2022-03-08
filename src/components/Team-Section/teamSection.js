import React from "react";
import "./teamSection.css";
import TopCollectionsItem from "../TopCollectionsItem";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import InfoComponent from "../InfoComponent";
import Ren46 from "../../assets/img/test-img/ren_46.png";
import Peoples from "../../assets/img/test-img/Peoples.jpg";
import CaptainCopy from "../../assets/img/test-img/CaptainCopy.png";
import General from "../../assets/img/test-img/General.png";
import GeneralCopy from "../../assets/img/test-img/GeneralCopy.png"

const TeamSection = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-12 team-artist-main">
          <div className="col-md-6 artist-content-main">
            <img src={CaptainCopy} alt="" height="400px" width="400px" />
            <div className="artist-content-inner">
            <h3 className="artist-main-heading ">ARTIST</h3>

            <p>
              <b>LORD APE- Founder</b> of <b>Meta Street Apes</b>, META GAME
              STUDIO and Lead Digital Artist on the project. Proud member of
              BAYC, MAYC.
            </p>
            </div>
          </div>
          <div className="col-md-6 team-content-main">
            <img src={GeneralCopy} alt="" height="400px" width="400px" />
            <div className="team-content-inner">
            <h3 className="team-main-heading  artist-main-heading ">TEAM</h3>

            <p>
              The art team behind Meta Street Apes has enjoyed success in the
              film industry, fashion and gaming. Their work has always gained
              mainstream recognition and adaptation. They’ve worked with Marvel
              and Warner Bros among others. Game Storm Studios is one of the biggest
              gaming developer in the world.
            </p>
           
            
            </div>
          </div>
        </div>
      </div>

 
    </>
  );
};

export default TeamSection;
