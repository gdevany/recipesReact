import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

// SHOW IF: props.pageSelected = "contact"
function PageContact(props) {
  let viewIt = "";
  if (props.pageSelected === "contact") {
    window.scroll(0, 0);
    viewIt = (
      <div className="row no-gutters pl-3 pt-3">
        <div className="bigger pt-2">Devany</div>
        <div className="pb-2">
          We just want to cook good things, cook them perfectly, and eat as much
          as we can without getting fat.
        </div>
        <div className="">
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
    );
  } else {
    return <div />;
  }

  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-10">
            <div className="row no-gutters projtitle">
              <div className="bigger spread text-left ml-2">contact us</div>
            </div>
            {viewIt}
          </div>
        </div>
      </div>
    </Animated>
  );
}

PageContact.propTypes = {
  pageSelected: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected
  };
}

export default connect(mapStateToProps)(PageContact);
