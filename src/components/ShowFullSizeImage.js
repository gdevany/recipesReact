import React from "react";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";

// SHOW IF: <ProjectInd /> calls it
function ShowFullSizeImage(props) {
  window.scroll(0, 0);
  return (
    <div className="container">
      <Image
        cloudName={props.cloudName}
        publicId={props.image}
        className="projIndimg"
      />
      <span
        className="topRight white biggest shadow"
        onClick={props.toggleShow}
        style={{ cursor: "pointer" }}
      >
        X
      </span>
      {/* <div className="row">
        <img
          src={require(`../pics/${props.logo}`)}
          className="miniLogo"
          alt="logo"
        />
      </div> */}
    </div>
  );
}

ShowFullSizeImage.propTypes = {
  cloudName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  toggleShow: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired
};

export default ShowFullSizeImage;
