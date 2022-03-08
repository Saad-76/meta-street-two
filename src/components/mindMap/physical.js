import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo";
import { ListedItemsArtwork1 } from "../../utils/allImgs";
import Footer from "../../layouts/Footer"
import Breadcumb from '../../components/Breadcumb'
import InfoComponent from "../InfoComponent";
import "./physical.css"
import ComNav from "../compNav/comNav"
import { useLocation } from "react-router-dom";
import Monkey3 from "../../assets/img/test-img/Monkey3.jpg"
import Commando from "../../assets/img/test-img/Commando.jpg"
import JoinSection from "../JoinSection/joinSection"
import Footers from "../Footers/footers"





const Physical = () => {
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
                  title='Physical '
      />
      <div className="physical-top-pad">
      <InfoComponent
        titleSm="PHYSICAL WORLD"
        titleLg="StreetwearIN PROGRESS
              "
        text=" 
        Members of The Meta Street Apes can expect exclusive drops in perpetuity.
              
              "
      />
      </div >

      <div className="physical-content-pad">
      <MindSectionInfo
        // topHead="PHYSICAL WORLD"
        img={<img src={Commando} alt="monkey3"/>}
        titleSm="Street Wear In Progress
"
        content="Members of The Meta Street Apes can expect exclusive drops in perpetuity. FAPE Shop 
        will be live following the launch. 
        Meet-ups, exhibits, music festivals, and more give us the opportunity to expand our reach 
        beyond a purely digital experience.
        
"
        titleSmTwo=" Record Label EXPLORING"
        contentTwo=" The music industry is broken. 2022 will be a big year for music NFTs. What can Meta 
        Street Apes do to help artists?"

      />
      </div>
      <JoinSection />
      <Footers/>
            {/* <Footer/> */}

    </>
  );
};

export default Physical;
