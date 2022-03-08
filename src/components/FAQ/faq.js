import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoComponent from "../InfoComponent";
import { IoIosArrowDown } from "react-icons/io";

import "./faq.css";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <div className="faq-section-pading">   
         <div className="faq-top-head">
        <InfoComponent
          //     titleSm="FREQUANTLY ASKED QUESTIONS
          //  "
          titleLg="FAQ
              "
        />
    
      </div>

      <div className="container-style-faq">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<IoIosArrowDown size={16} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              1. What is an NFT?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              NFT stands for 'non-fungible token. An NFT is basically data that
              is accounted for in a digital ledger, and that data represents
              something specific and unique. An NFT can, for example, represent
              a unique piece of art or a game token.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<IoIosArrowDown size={16} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
           2. How do I know if my NFT is real?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
            You are currently not an owner
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            One of the best ways to know the authenticity and ownership of an NFT is to 
follow their social media profiles to see if they announced any NFT releases.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<IoIosArrowDown size={16} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              3. Should I mint an NFT?
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
            Filtering has been entirely disabled for whole web server
          </Typography> */}
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              One of the main benefits of minting NFTs is investors are{" "}
              <b>
                able to buy into a collection at the earliest possible
                opportunity
              </b>
              . That means they stand the best chance of making a profit if the
              NFT collection goes on to soar in value once it's listed on
              secondary NFT marketplaces like OpenSea.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<IoIosArrowDown size={16} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              4. What is whitelist NFT?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For NFTs, whitelisting is{" "}
              <b>
                the process of getting a crypto wallet address pre-approved for
                a future NFT mint
              </b>{" "}
              (also called a “drop”). Since most NFTs are launched on the
              Ethereum blockchain, the address being whitelisted would be your
              public Ethereum (ETH) address.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "pane15"}
          onChange={handleChange("pane15")}
        >
          <AccordionSummary
            className="icon-color"
            expandIcon={<IoIosArrowDown size={16} />}
            aria-controls="pane15bh-content"
            id="pane15bh-header"
          >
            <Typography
              className="heading-fonts-faq"
              sx={{ width: "100%", flexShrink: 0 }}
            >
              5. What is the metaverse?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The metaverse can be defined as
              <b> a simulated digital environment</b> that uses augmented
              reality (AR), virtual reality (VR), and blockchain, along with
              concepts from social media, to create spaces for rich user
              interaction mimicking the real world.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      </div>

    </>
  );
}
