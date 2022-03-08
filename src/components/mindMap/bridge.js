import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import Footer from "../../layouts/Footer"
import Breadcumb from '../../components/Breadcumb'
import InfoComponent from "../InfoComponent";
import "./bridge.css"
import ComNav from "../compNav/comNav"
import { useLocation } from "react-router-dom";
import Monkey6 from "../../assets/img/test-img/Monkey6.jpg"
import JoinSection from "../JoinSection/joinSection"
import Footers from "../Footers/footers"
import Gold_jacket from "../../assets/img/test-img/Gold_jacket.jpg"




const Bridge = () => {
      const routePath = useLocation();
      const onTop = () => {
        window.scrollTo(0, 4);
      }
      useEffect(() => {
        onTop()
      }, [routePath]);
  return (
    <>
    <ComNav/>

      <Breadcumb  
                  namePage='Mind Map'
                  title='Bridge Between '
      />


<div className="bridge-top-pad">
      <InfoComponent
        titleSm="Bridge Between"
        titleLg="The bridge between the physical and digital world presents 
              "
        text=" 
        A playground to create a new 
        type of media.
              
              "
      />
      </div>
<div className="bridge-content-pad">
      <MindSectionInfo
       
        img={<img src={Gold_jacket} alt="monkey6" />}

        content="The bridge between the physical and digital world presents a playground to create a new 
        type of media. Here we will experiment with meta-games,
"
        contentTwo=" Interactive experiences, and 
        unique ways to grow. By allowing ownership in the characters themselvesMicro-actions and games played within the community in order to unlock new 
        experiences."
 
        contentThree="Meta Street 
        Apes along with the community is positioned to expand beyond this playbook.
        
"


      />
      </div>
      <JoinSection />
      <Footers/>

            {/* <Footer/> */}

    </>
  );
};

export default Bridge;
