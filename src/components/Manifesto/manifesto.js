import {React, useEffect} from "react";
import InfoComponent from "../InfoComponent";
import SpiderCopy from "../../assets/img/test-img/SpiderCopy.png";
import "./manifesto.css";
import { useLocation } from "react-router-dom";


const Manifesto = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <>
      <div className="manifesto-pad-top">
        {/* <InfoComponent
          titleSm="We rise together"
          titleLg="THE MANIFESTO 
              "
          text="We grow together.
              "
        /> */}
        <div className="container">
          <div className="col-md-12 manifesto-main-style">
            <div className="col-md-6 manifesto-image-setion">
              <img
                className="manifesto-image-setion-inner"
                src={SpiderCopy}
                alt="captain"
                // width="450px"
                // height="400px"
              />
            </div>
            <div className="col-md-6 manifesto-content-section">
              <h3>THE MANIFESTO </h3>

              <p>
                This is a Revolution...
                <br />
                Aping in here is different.
                <br />
                Tearing down barriers.
                <br />
                Building DAO communities.
                <br />
                Creating magic internet money with our friends.
                <br />
                To those who don't get it, we tell them: LFG!
                <br />
                They will come around. eventually.
                <br />
              </p>

              <p>
                Here's to the ones with the courage to jump down a blazing
                rabbit hole. One that pulls you away from a world that's created
                by the many and owned by a few degens...
              </p>
              <p>To a world that's created by visionaries and owned by all.</p>
              <p>
                We rise together.
                <br />
                We build together.
                <br />
                We grow together.
                <br />
              </p>
              <p>
                “You take the blue pill, the story ends, you wake up in your bed
                and believe whatever you want to believe. You take the red pill,
                you stay in the Meta Street Apes community, and we will show you
                how deep the rabbit hole goes.” -Morpheus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Manifesto;
