import React from "react";
import PropTypes from "prop-types";


function LandingPage(props) {
// SHOW IF: pageSelected === ""
  window.scroll(0,0);
  let viewIt = "";
  if (props.pageSelected === "landing") {
    viewIt = (
      <div className="container">
        <img
          src={require(`../pics/${props.landingPic}`)}
          className="landingPic"
          alt="background"
          />
        <span className="">
          <img
            src={require("../pics/WBPhome.png")}
            alt="water with ball"
            className="landingTextImage1" />
          <img
            src={require("../pics/WBPshould.png")}
            alt="landing page quote"
            className="landingTextImage2" />
        </span>
      </div>
    );
  } else {return <div />;}

  return (
    <div className="">
      {viewIt}
    </div>
  );
}

LandingPage.propTypes = {
  pageSelected: PropTypes.string.isRequired,
  landingPic: PropTypes.string.isRequired,

};

export default LandingPage;

// <span className="landingText1 white bigger">Does this remind you of home?</span>
// <span className="landingText2 white bigger itally">....It should</span>
