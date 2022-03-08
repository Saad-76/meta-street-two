import { React, useEffect } from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import Footer from "../../layouts/Footer";
import Breadcumb from "../../components/Breadcumb";
import InfoComponent from "../InfoComponent";
import "./seedling.css";
import ComNav from "../compNav/comNav";
import { useLocation } from "react-router-dom";
import Monkey2 from "../../assets/img/test-img/Monkey2.jpg";
import JoinSection from "../JoinSection/joinSection";
import Footers from "../Footers/footers";
import Black_Jacket from "../../assets/img/test-img/Black_Jacket.jpg";

const Seedling = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  };
  useEffect(() => {
    onTop();
  }, [routePath]);
  return (
    <>
      <ComNav />

      <Breadcumb namePage="Mind Map" title="Seedling" />
      <div className="seedling-top-pad">
        <InfoComponent
          titleSm="  DAO EXPLORING"
          titleLg="Experimentation with DAOs
              "
        />
      </div>
      <div className="seedling-content-pad">
        <MindSectionInfo
          // topHead="-DAOEXPLORING"
          img={<img src={Black_Jacket} alt="monkey2" />}
          contentTwo="Experimentation with DAOs is one of the most exciting areas of crypto today. "
          contentThree="We must 
        start small and explore various governance structures, reiterating on areas that need 
        improvement, before moving onto bigger experiments.
"
          contentFour="The regulatory framework for 
DAOs is also something that needs more research."
        />
      </div>
      <JoinSection />
      <Footers />
      {/* <Footer/> */}
    </>
  );
};

export default Seedling;
