import React from "react";
import "./joinSection.css";

const JoinSection = () => {
  return (
    <>
      <div className="">
        <div className="col-md-12 background-color-join">
          <div className="join-section-inner">
            <h1>
              JOIN<br></br>
              <span className="gradient-text  join-data">META STREET APES</span>
            </h1>
            <a href="https://discord.gg/c6KVnyUX" title="" target="_blank">
              <button className="btn btn-explore more-btn mr-3">
                Join our discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default JoinSection;
