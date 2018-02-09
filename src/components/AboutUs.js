import React from "react";
import PropTypes from "prop-types";


// SHOW IF: props.pageSelected = "about"
function AboutUs(props) {
  let viewIt = "";
  if (props.pageSelected === "about") {
    viewIt = (
      <div>
        <div className="container padbottom2 projtitle">
          <div className="row">
            <div className="offset-xs-1 col-xs-10 offset-md-2 col-md-8
              offset-lg-3 col-lg-6 projtitle padtop2">
              <div className="big">Customer Satisfaction</div>
              <div className="text-left">
                Our overall mission is customer satisfaction. From the first meeting
                until the customer jumps in the water, we want to make sure they
                are clear on what phase we are currently on and what comes next.
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">the beginning</div>
                <div className="">
                  Westbank pools was founded in 1892. Just seeing if you're paying
                  attention. Actually, we were founded in 2015 deep in the heart
                  of Austin.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {return <div />;}

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <div className="bigger projtitle d-flex text-left padtop2">
              about us
            </div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

AboutUs.propTypes = {
  pageSelected: PropTypes.string.isRequired,

};

export default AboutUs;
