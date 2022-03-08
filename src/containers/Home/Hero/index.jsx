import FiveCharacters from "../../../assets/img/test-img/FiveCharacters.png";
const HeroContainer = () => {
  return (
    <>
      <div className="homepage-image" >
        <img src={FiveCharacters} alt="FiveCharacters" width="110%" />
      </div>
      <div>
      <div className="join-dicord-home-button">
      <a href="https://discord.gg/c6KVnyUX" title="" target="_blank">

                    <button className="btn btn-explore more-btn ">
                      Join our discord
                    </button>
                    </a>
                  </div>
      </div>
      {/* <div className="homepage-One">
        <section className="hero-section moving section-padding" id="home">
          <div className="moving-bg "></div>

          <div className="hero-section-content">
            <div className="container ">
              <div className="row align-items-center"></div>
              <div className="col-lg-6">
                <img src={DiamondCopy} alt="" height="680px" width="680px" />
              </div>
              <div className="col-12 col-lg-6 col-md-12">
                <div className="welcome-content">
                  <div className="promo-section"></div>
                  <h1>
                    JOIN<br></br>
                    <span className="gradient-text">
                      META STREET APES.
                    </span>{" "}
                  </h1>
                  <h1>
                    ART.<br></br>
                    <span className="gradient-text">COMMUNITY.</span>{" "}
                  </h1>

                  <div className="dream-btn-group">
                  <a href="https://twitter.com/" title="" target="_blank">

                    <button className="btn btn-explore more-btn mr-3">
                      Join our discord
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="homepage-two">
        <section className="hero-section moving section-padding" id="home">
          <div className="moving-bg "></div>

          <div className="hero-section-content">
            <div className="container  resp-top ">
              <div className="row align-items-center"></div>
              <div className=" col-md-12">
                <div className="welcome-content">
                  <div className="promo-section"></div>
                  <h1>
                    JOIN<br></br>
                    <span className="gradient-text">
                      META STREET APES.
                    </span>{" "}
                  </h1>
                  <h1>
                    ART.<br></br>
                    <span className="gradient-text">COMMUNITY.</span>{" "}
                  </h1>

                  <div className="dream-btn-group">
                    <button className="btn btn-explore more-btn mr-3">
                      Join our discord
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={DiamondCopy} alt="" height="680px" width="680px" />
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default HeroContainer;
