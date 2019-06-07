import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function Logo(props) {
  const logoImg = {
    background:
      "url(" + require(`../pics/${props.logo}`) + ") no-repeat center",
    backgroundSize: "contain"
  };

  let viewIt = "";
    viewIt = (
      <div className="row">
        <div className="d-flex justify-content-center col-12 pad-top-resp">
          <div className="seclogo">
            <div style={logoImg} className="logoinit" />
          </div>
        </div>
      </div>
    );

  return <div className="container-fluid logoBackground">{viewIt}</div>;
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  pageSelected: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    logo: state.logo,
    pageSelected: state.pageSelected,
  };
}

export default connect(mapStateToProps)(Logo);
