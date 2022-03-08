


import {React, useEffect} from "react";
import MindSectionInfo from "../mindSectionInfo/mindSectionInfo"
import {

	ListedItemsArtwork1} from '../../utils/allImgs'
  import Footer from "../../layouts/Footer"
  import InfoComponent from "../InfoComponent";

  import Breadcumb from '../../components/Breadcumb'
  import "./metaverse.css"
  import ComNav from "../compNav/comNav"
  import { useLocation } from "react-router-dom";
  import JoinSection from "../JoinSection/joinSection"
import Footers from "../Footers/footers"
  import Monkey4 from "../../assets/img/test-img/Monkey4.jpg"
  import Green_Glasses from "../../assets/img/test-img/Green_Glasses.jpg"




const  Metaverse=()=> {
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
                  title='Metaverse '
      />
      <div className="metaverse-top-pad">

      <InfoComponent
        titleSm="Metaverse"
        titleLg="Where The Metaverse Is Today And Where Is It Going?
              "
  
      />
      </div>
      <div className="metaverse-content-pad">
<MindSectionInfo
// topHead='Metaverse'
img={<img src={Green_Glasses}  alt="monkey4"/>}
titleSm='Where the metaverse is today and where is it going?
'
content='   The metaverse today is where we currently spend most of our time: Discord + Twitter. 
How do we amplify this experience for Meta Street Apes members? How do we 
distribute the brand to places that have the most attention today? More importantly, 
where will the metaverse be one year+ from now?.

'
// titleSmTwo='Lookbook IN Progress'
// contentTwo='Sorting, filtering, and simping will all be supported.'
titleSmThree='Game EXPLORING'
contentThree="Many will try to create one, but few teams have the experience and background to build a 
genuinely great game with mass market appeal and scalability. Sandbox VR, 
Decentraland, Cryptovoxels, and Somnium Space are a few platforms we are 
considering. Though the core team has the experience, it's a huge endeavour 
nonetheless. If we do it, we'll do it right.
"
titleSmFour='Digital Drip EXPLORING
'
contentFour="If you're on Team Meta Street Apes, you'll be dripped out in the metaverse. We'll have 
you covered (literally, from head to toe).

"
// titleSmFive="Digital Drip Exploring"
// contentFive="If you're on Team FAPE, you'll be dripped out in the metaverse. We'll have you covered 
// (literally, from head to toe)."


/>
</div>
<JoinSection />
      <Footers/>
{/* <Footer/> */}

      </>
  );
}

export default Metaverse;
