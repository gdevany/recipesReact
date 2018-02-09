import React from "react";
import PropTypes from "prop-types";


function Process(props) {
// SHOW IF: props.pageSelected = "process"
  let viewIt = "";
  if (props.pageSelected === "process") {
    window.scroll(0,0);
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
                <div className="big black red">plan it</div>
                <div className="">
                  planning phase can really be broken down to 3 steps. First we
                  all agree upon an architectural plan for the pool and surrounding
                  landscaping. We use the best in the business for backyard design
                  and the latest in cad to bring these ideas to life. Once the design
                  stage is complete, we present the customer with a detailed time-line
                  for the project with estimates on completion for each listed
                  phase. The third planning item is payment options. If needed,
                  Westbank pools has several accredited banks and local credit
                  unions we have worked with for over a decade and we will help
                  facilitate the loan process.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big black red">let's do this</div>
                <div className="">
                  Breaking ground is exciting. This means theres no turning back
                  now, unless you just want a big hole in the ground. Our crews
                  are trained to use our "small footprint" policy at all times.
                  We minimize construction paths, remove non-essential equipment
                  and materials, and clean up the construction site at the end of
                  each working day.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big black red">build it</div>
                <div className="">
                  The entire construction process involves many contractors- site
                  prep (digging the hole), steel workers (rebar, landscape planters,
                  etc), finishers (gunite, concrete, etc), tile and/or brick layers,
                  plumbers, and electricians. Westbank pools uses only trusted
                  and bonded contractors which we've worked with for many years.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big black red">when can we jump in?</div>
                <div className="">
                  When the construction is in the final stages, we will be on-site
                  almost daily to make sure the customer is satisfied with all
                  aspects of the project. Once it's complete, our owner Brian
                  Richardson will personally walk you through all the equipment
                  and give you a personal pool school so you know how to keep it
                  ready for parties every day of the year.
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
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8
            justify-content-between">
            <div className="bigger projtitle d-flex text-left padtop2">
              process
            </div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Process.propTypes = {
  pageSelected: PropTypes.string.isRequired,
};

export default Process;
