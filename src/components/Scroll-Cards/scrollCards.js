import React from "react";
import "./scrollCards.css";
import { FaStar, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ScrollCardsInfo from "../ScrollCardsInfo/scrollCardsInfo";

const ScrollCards = () => {
  const Rightscrol = () => {
    document.getElementById("containe").scrollLeft += 430;
  };
  const Leftscrol = () => {
    document.getElementById("containe").scrollLeft -= 430;
  };

  return (
    <>
      <div className="scroll-cards-top-pad ">
        <div>
          <h3 className="mindmap-heading">THE MINDMAP</h3>
        </div>
    
        <div className="tes-card " id="containe">
     

          <div className=" scroll-cards-style">
            {/* ---------------------------first card----------------------------- */}
            <div className="scroller-y">

            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">
                    01-THE BEGINNING
                  </h3>
                </div>
                <div className="cards-content-section">
                  <h5>Launch initiated</h5>
                  <p>
                    After so much work we are super excited to reveal the
                    project to the world. Our number one priority keeping our
                    NFT quality worthy. You’ll be met with bespoke creatures
                    whose features may be familiar from the Big Screen.
                  </p>
                  <h5>Whitelisting</h5>
                  <p>
                    The Holy Grail in NFT mints these days is a whitelist spot.
                    Make sure you join our Discord server to find out how to get
                    whitelisted. The mechanism to get whitelisted will get
                    difficult as the project will progress and closer to mint.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* ----------------------------------------second Card------------------------------------------------------------- */}

            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">
                    02-VISION & VALUES
                  </h3>
                </div>
                <div className="cards-content-section">
                  <h5>Our Vision</h5>
                  <p>
                    Create the largest decentralized brand for the metaverse
                    that is built and owned by the community.
                  </p>
                  <h5>Values</h5>
                  <h5>Community first</h5>
                  <p>
                    Everything starts and ends with the community. The moment we
                    prioritize something other than the community will be the
                    beginning of the end. We won't let that happen, because
                    we'll always have community as the #1 value of{" "}
                    <b>Meta Street Apes.</b>
                  </p>
                  <h5>Dope sh*t only</h5>
                  <p>
                    <b>Meta Street Apes</b> are creative, brave, and relentless.
                    It's easy to follow trends and improve incrementally. It's
                    harder to be original and do dope sh*t. We pave our own
                    path.
                  </p>
                  <h5> Trust the process</h5>
                  <p>
                    Good things take time. Decentralized movements can't turn
                    corners as quickly as centralized movements, and that's both
                    a blessing and a curse. Decentralized doesn't mean there
                    can't be leaders. The core team will provide guard rails and
                    resources for all beans to grow together, but it won't
                    happen overnight.{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* -----------------------Third Card------------------- */}

            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">03-COMMUNITY</h3>
                </div>
                <div className="cards-content-section">
                  <h5>We are the skaters of the internet</h5>
                  <p>
                    We're skating between the blurred lines of the physical and
                    digital worlds as they are beginning to blend. We are a
                    community of individuals who aren't afraid to push the
                    boundaries, challenge the status quo, and communicate
                    boldly. We're making an impact on web3 culture.
                  </p>

                  <p>
                    To grow our community we will
                    <b> empower creative from within.</b> We're building out the
                    infrastructure to surface and promote artists. We're already
                    seeing the impact within our community from the support and
                    help that we provide each other.
                  </p>
                  <h5>Our community stands for web3 and an open internet.</h5>
                  <p>
                    We will take steps to educate the community on ways to
                    protect our data and subvert web2 power. We look to lead as
                    well as to back other movements that share a similar vision
                    in censorship-resistance and a decentralized metaverse.
                  </p>

                  <p>
                    Long term we must<b> mobilize the community</b> in a
                    scalable way. This means recruiting for Global Ambassadors.
                    Creating meet-up playbooks for ambassadors to run locally.
                    It also means we need to figure out governance for the brand
                    in a way that allows us to take input from the community
                    while also making decisions as efficiently and effectively
                    as possible.{" "}
                  </p>
                </div>
              </div>
            </div>

            {/* --------------------------------Fourth Card--------------- */}
            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">04-METAVERSE</h3>
                </div>
                <div className="cards-content-section">
                  <h5>Where the metaverse is today and where is it going?</h5>
                  <p>
                    The metaverse today is where we currently spend most of our
                    time: Discord + Twitter. How do we amplify this experience
                    for <b>Meta Street Apes</b> members? How do we distribute
                    the brand to places that have the most attention today? More
                    importantly, where will the metaverse be one year+ from
                    now?.
                  </p>
                  <h5>GameEXPLORING</h5>

                  <p>
                    Many will try to create one, but few teams have the
                    experience and background to build a genuinely great game
                    with mass market appeal and scalability. Sandbox VR,
                    Decentraland, Cryptovoxels, and Somnium Space are a few
                    platforms we are considering. Though the core team has the
                    experience, it's a huge endeavour nonetheless. If we do it,
                    we'll do it right.
                  </p>

                  <h5>Digital DripEXPLORING</h5>
                  <p>
                    If you're on Team <b>Meta Street Apes</b>, you'll be dripped
                    out in the metaverse. We'll have you covered (literally,
                    from head to toe)
                  </p>
                </div>
              </div>
            </div>

            {/* -----------Fifth Card----------------------------------------- */}
            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">
                    05-PHYSICAL WORLD
                  </h3>
                </div>
                <div className="cards-content-section">
                  <h5>Streetwear IN PROGRESS</h5>
                  <p>
                    Members of The <b>Meta Street Apes</b> can expect exclusive
                    drops in perpetuity. Meta Street Apes Shop will be live following the
                    launch. Meet-ups, exhibits, music festivals, and more give
                    us the opportunity to expand our reach beyond a purely
                    digital experience.
                  </p>
                  <h5>Record LabelEXPLORING</h5>

                  <p>
                    The music industry is broken. 2022 will be a big year for
                    music NFTs. What can <b>Meta Street Apes</b> do to help
                    artists?
                  </p>
                </div>
              </div>
            </div>
            {/* -------------------------------------six Cards---------------------------- */}
            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">
                    06-BRIDGE BETWEEN
                  </h3>
                </div>
                <div className="cards-content-section">
                  <p>
                    The bridge between the physical and digital world presents a
                    playground to create a new type of media. Here we will
                    experiment with meta-games, interactive experiences, and
                    unique ways to grow. By allowing ownership in the characters
                    themselves, <b>Meta Street Apes</b> along with the community
                    is positioned to expand beyond this playbook.
                  </p>
                </div>
              </div>
            </div>

            {/* -------------------------------------------------last card------------- */}
            <div className="">
              <div className="tes-scr">
                <div>
                  <h3 className="scroll-cards-heading-style">
                    07-DAOEXPLORING{" "}
                  </h3>
                </div>
                <div className="cards-content-section">
                  <p>
                    Experimentation with DAOs is one of the most exciting areas
                    of crypto today. We must start small and explore various
                    governance structures, reiterating on areas that need
                    improvement, before moving onto bigger experiments. The
                    regulatory framework for DAOs is also something that needs
                    more research
                  </p>
                </div>
              </div>
            </div>

            {/* ----------- */}
          </div>
        </div>
        <div className="scroll-buttons-style">
          <button onClick={Leftscrol} className="scroll-left-buttton" >
            <FaArrowLeft size={22.5} />
          </button>
          <button onClick={Rightscrol} className="scroll-right-buttton">
            <FaArrowRight size={22.5} />
          </button>
          </div>
      </div>
    </>
  );
};
export default ScrollCards;
