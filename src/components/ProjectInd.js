import React from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import ShowFullSizeImage from "./ShowFullSizeImage";
import { connect } from "react-redux";
import { setProjectChosen, setPageSelect } from "../actions";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

var FontAwesome = require("react-fontawesome");

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
          <Animated
            animationIn="fadeInDown"
            animationOut="zoomOut"
            isVisible={true}
            key={image.public_id}
          >
            <Image
              onClick={() => {
                this.setState({ imageClicked: image.public_id });
                this.toggleImageViewerClicked();
              }}
              cloudName={this.props.cloudName}
              publicId={image.public_id}
              className="py-2 projIndimg rounded"
              quality="10"
              style={{ cursor: "pointer" }}
              key={image.public_id}
            />
          </Animated>
        );
      });
    } else {
      return <div />;
    }
    return viewIt;
  };

  render() {
    window.scroll(0, 0);
    return (
      <div className="container">
        <div className="row pt-2">
          <div className="projIndimg">{this.showFullSizeImage()}</div>
          <div className="pt-5 col-12 col-md-6 d-flex text-left flex-column">
            <div
              className="red"
              style={{ cursor: "pointer" }}
              onClick={() => {
                this.props.setPage("home"), this.props.setProjectChosen("");
              }}
            >
              <FontAwesome
                className="mb-3 pr-3"
                name="fas fa-arrow-left"
                size="1x"
              />
              back
            </div>
            <div className="bigger projtitle text-truncate">
              {this.props.projectChosen}
            </div>
            <div className="pt-3 mb-5">{this.showDescription()}</div>
          </div>
          <div className="col-12 offset-md-1 col-md-5 d-flex flex-column text-center align-items-center">
            <small>Click image to toggle full size & quality</small>
            {this.showProjInd()}
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

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudName: state.cloudName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProjectChosen: proj => {
      dispatch(setProjectChosen(proj));
    },
    setPage: page => {
      dispatch(setPageSelect(page));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectInd);
