import React from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import ShowFullSizeImage from "../containers/ShowFullSizeImageContainer";
import PropTypes from "prop-types";

// SHOW IF: (projectChosen)
class ProjectInd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: "project",
      gallery: [],
      imageViewerClicked: false,
      imageClicked: ""
    };
  }

  // Preload the list of "TAGGED" projects from cloudinary
  componentDidMount() {
    axios
      .get(
        `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
          this.props.projectChosen
        }.json`
      )
      .then(res => {
        //eslint-disable-next-line
        this.setState({ gallery: res.data.resources });
      });
    window.scroll(0, 0);
  }

  // SHOW IF: this.state.imageClicked === true
  // show full size rendering (<ShowFullSizeImage />)
  showFullSizeImage = () => {
    return this.state.imageViewerClicked === false ? null : (
      <ShowFullSizeImage
        image={this.state.imageClicked}
        toggleShow={this.toggleImageViewerClicked}
      />
    );
  };

  toggleImageViewerClicked = () => {
    this.setState({ imageViewerClicked: !this.state.imageViewerClicked });
  };

  showDescription = () => {
    // SHOW IF: state.gallery is loaded with ProjectChosen image links
    // Get project description
    let showDesc = "";
    if (this.state.gallery.length > 0) {
      this.state.gallery[0].context !== "undefined"
        ? (showDesc = this.state.gallery[0].context.custom.caption)
        : (showDesc = "empty description");
    }
    return showDesc;
  };

  showProjInd = () => {
    // SHOW IF: (projectChosen)
    // Map thru project pics (this.state.gallery) to show
    let viewIt = "";
    if (
      this.props.projectChosen !== "" &&
      this.props.pageSelected === this.state.thisPage
    ) {
      // window.scroll(0,230);
      viewIt = this.state.gallery.map(image => {
        return (
          <Image
            onClick={() => {
              this.setState({ imageClicked: image.public_id });
              this.toggleImageViewerClicked();
            }}
            cloudName={this.props.cloudName}
            publicId={image.public_id}
            className="projIndimg"
            quality="10"
            style={{ cursor: "pointer" }}
            key={image.public_id}
          />
        );
      });
    } else {
      return <div />;
    }
    return viewIt;
  };

  render() {
    !this.state.imageViewerClicked ? window.scroll(0, 0) : window.scroll(0, 0);
    return (
      <div className="container">
        <div className="row black padtop">
          <div className="projIndimg">{this.showFullSizeImage()}</div>
          <div className="offset-1 col-5 d-flex text-left flex-column">
            <div className="biggest projtitle">{this.props.projectChosen}</div>
            <div className="padtop2 padbottom">{this.showDescription()}</div>
          </div>
          <div className="col-5 d-flex flex-column text-center">
            <small>Click image to toggle full size & quality</small>
            <div>{this.showProjInd()}</div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectInd.propTypes = {
  cloudName: PropTypes.string.isRequired,
  projectChosen: PropTypes.string.isRequired
};

export default ProjectInd;
