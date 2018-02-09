import React from "react";
// import ImageViewer from "../containers/ImageViewerContainer";
import axios from "axios";
import {Image} from "cloudinary-react";
import ShowFullSizeImage from "../containers/ShowFullSizeImageContainer";
import PropTypes from "prop-types";


// SHOW IF: (projectChosen)
class ProjectInd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      imageViewerClicked: false,
      imageClicked: "",
    };
  }

// Preload the list of "TAGGED" projects from cloudinary
  componentWillMount() {
    axios.get(`https://res.cloudinary.com/${this.props.cloudName}/image/list/${this.props.projectChosen}.json`)
      .then(res => {
        //eslint-disable-next-line
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
      });
  }

// SHOW IF: this.state.imageClicked === true
// show full size rendering (<ShowFullSizeImage />)
  showFullSizeImage = () => {
    return (
      // this.state.imageViewerClicked === false ?
      // null : <ImageViewer imageList={this.state.gallery} />
      this.state.imageViewerClicked === false ?
        null :
        <ShowFullSizeImage
          image={this.state.imageClicked}
          toggleShow={this.toggleImageViewerClicked} />
      );
  }

  toggleImageViewerClicked = () => {
    this.setState({imageViewerClicked: !this.state.imageViewerClicked});
  }

  render() {
// SHOW IF: state.gallery is loaded with ProjectChosen image links
// Get project description
    let showDesc = "";
    if (this.state.gallery.length > 0) {
      showDesc = this.state.gallery[0].context.custom.caption;
    }

// SHOW IF: (projectChosen)
// Map thru project pics (this.state.gallery) to show
    let viewIt = "";
    if (this.props.projectChosen !== "") {
      // window.scroll(0,230);
      viewIt = this.state.gallery.map(image => {
        return (
          <Image
            onClick={() => {
              this.setState({imageClicked: image.public_id});
              this.toggleImageViewerClicked();
            }}
            cloudName={this.props.cloudName}
            publicId={image.public_id}
            className="projIndimg"
            style={{cursor: "pointer"}}
            key={image.public_id} />
        );
      });
    } else {return <div />;}

    return (
      <div className="container">
        <div className="row black padtop">
          <div className="projIndimg">{this.showFullSizeImage()}</div>
          <div className="offset-sm-1 col-sm-8 offset-md-1 col-md-5 d-flex text-left flex-column">
            <div className="biggest projtitle">{this.props.projectChosen}</div>
            <div className="padtop2 padbottom">{showDesc}</div>
          </div>
          <div className="col-sm-12 col-md-5 d-flex flex-column text-center">
            <div>Click image to view full size</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    );
  }
}

ProjectInd.propTypes = {
  cloudName: PropTypes.string.isRequired,
  projectChosen: PropTypes.string.isRequired,
};

export default ProjectInd;
