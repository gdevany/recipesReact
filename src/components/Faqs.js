import React from "react";
import PropTypes from "prop-types";


function Faqs(props) {
// SHOW IF: props.pageSelected = "faqs"
  let viewIt = "";
  if (props.pageSelected === "faqs") {
    window.scroll(0,0);
    viewIt = (
      <div>
        <div className="container pb-3 projtitle">
          <div className="row">
            <div className="offset-xs-1 col-xs-10 offset-md-2 col-md-8
              offset-lg-3 col-lg-6 projtitle pt-3">
              <div className="big">Customer Satisfaction</div>
              <div className="text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor. Vivamus at augue eget arcu dictum varius duis at consectetur. Integer eget aliquet nibh praesent tristique magna. Sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-4">
                <div className="big red">Netus et malesuada fames ac?</div>
                <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor. Vivamus at augue eget arcu dictum varius duis at consectetur. Integer eget aliquet nibh praesent tristique magna. Sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-4">
                <div className="big red">Netus et malesuada fames ac?</div>
                <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor. Vivamus at augue eget arcu dictum varius duis at consectetur. Integer eget aliquet nibh praesent tristique magna. Sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-4">
                <div className="big red">Netus et malesuada fames ac?</div>
                <div className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec adipiscing tristique risus nec feugiat. Gravida neque convallis a cras semper auctor. Vivamus at augue eget arcu dictum varius duis at consectetur. Integer eget aliquet nibh praesent tristique magna. Sodales ut eu sem integer vitae. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
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
            <div className="bigger projtitle d-flex text-left pt-3">faq"s</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Faqs.propTypes = {
  pageSelected: PropTypes.string.isRequired,
};

export default Faqs;
