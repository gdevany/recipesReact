import React from "react";
import PropTypes from "prop-types";


function Logo(props) {
  const logoImg = {
    background: "url(" + require(`../pics/${props.logo}`) + ") no-repeat center",
    backgroundSize: "contain"
  };

  let viewIt = "";
  if (props.pageSelected !== "fdgsdf") {
    viewIt = (
      <div className="row">
        <div className=" d-flex justify-content-center col-12">
          <div className="seclogo">
            <div style={logoImg} className="logoinit" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container landingSticky">
      {viewIt}
    </div>

  );
}

Logo.propTypes = {
  logo: PropTypes.string.isRequired,
  pageSelected: PropTypes.string.isRequired,

};

export default Logo;
