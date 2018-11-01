import React from "react";
import { Image } from "cloudinary-react";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

// SHOW IF: <ProjectInd /> calls it
function ShowFullSizeImage(props) {
  window.scroll(0, 0);
  return (
    <Animated animationIn="fadeInDown" animationOut="zoomOut" isVisible={true}>
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
      </div>
    </Animated>
  );
}

ShowFullSizeImage.propTypes = {
  cloudName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  toggleShow: PropTypes.func.isRequired,
  logo: PropTypes.string.isRequired
};

export default ShowFullSizeImage;
