import React from "react";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

// SHOW IF: props.pageSelected = "contact"
function PageContact(props) {
  let viewIt = "";
  if (props.pageSelected === "contact") {
    window.scroll(0, 0);
    viewIt = (
      <div>
        <div className="container pb-3 projtitle">
          <div className="row">
            <div
              className="offset-xs-1 col-xs-10 offset-md-2 col-md-8
              offset-lg-3 col-lg-6 projtitle py-3"
            >
              <div className="bigger">Devany</div>
              <div className="text-left">
                We just want to cook good things, cook them perfectly, and eat
                as much as we can without getting fat.
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-5">
                <div className="bigger red">
                  <i className="fa fa-phone" aria-hidden="true" />
                  phone
                </div>
                <div className="">512-587-9285</div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-5">
                <div className="bigger red">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                  email
                </div>
                <div className="">greg.devany@yahoo.com</div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left pt-5">
                <div className="bigger red">
                  <i className="fa fa-twitter" aria-hidden="true" />
                  twitter
                </div>
                <div className="pb-5">#noTwitter</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }

  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
      <div className="container pt-4">
        <div className="row">
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
            <div className="bigger projtitle d-flex text-left">
              contact us
            </div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </Animated>
  );
}

PageContact.propTypes = {
  pageSelected: PropTypes.string.isRequired
};

export default PageContact;
