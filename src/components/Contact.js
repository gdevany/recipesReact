import React from "react";
import PropTypes from "prop-types";


// SHOW IF: props.pageSelected = "contact"
function Contact(props) {
  let viewIt = "";
  if (props.pageSelected === "contact") {
    window.scroll(0,0);
    viewIt = (
      <div>
        <div className="container padbottom2 projtitle">
          <div className="row">
            <div className="offset-xs-1 col-xs-10 offset-md-2 col-md-8
              offset-lg-3 col-lg-6 projtitle padtop2">
              <div className="bigger">Customer Satisfaction</div>
              <div className="text-left">
                Our overall mission is customer satisfaction. From the first meeting
                until the customer jumps in the water, we want to make sure they
                are clear on what phase we are currently on and what comes next.
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="bigger red">
                  <i className="fa fa-phone" aria-hidden="true" />phone
                </div>
                <div className="">
                  512-217-8004
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="bigger red">
                  <i className="fa fa-envelope-o" aria-hidden="true" />email
                </div>
                <div className="">
                  hello@westbankpools.com
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="bigger red">
                  <i className="fa fa-twitter" aria-hidden="true" />twitter
                </div>
                <div className="">
                  #westbank
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
            <div className="bigger projtitle d-flex text-left padtop2">contact us</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  pageSelected: PropTypes.string.isRequired,
};

export default Contact;
