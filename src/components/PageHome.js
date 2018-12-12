import React from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import ProjectInd from "../containers/ProjectIndContainer";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

// LANDING PAGE
class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: "home",
      initialSearchTag: this.props.searchTagChosen,
      message: "",
      gallery: [],
      fullGallery: [],
      projectFile: this.props.cloudinaryPojectFile,
      projectMainImageTag: this.props.projectMainImageTag
    };
  }

  //PRELOAD PROJECTS tagged as (this.props.projectMainImageTag) from cloudinary
  componentDidMount() {
    axios
      .get(
        `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
          this.props.projectMainImageTag
        }.json`
      )
      .then(res => {
        this.setState({
          gallery: res.data.resources,
          fullGallery: res.data.resources
        });
        console.log(res.data.resources);
      });
    window.scroll(0, 0);
  }

  //LOAD PROJECTS: When search tag changes
  componentDidUpdate(prevProps) {
    if (this.props.searchTagChosen !== prevProps.searchTagChosen) {
      this.setState({ gallery: [] });
      //If tag selected,...
      if (
        this.props.subjects.indexOf(this.props.searchTagChosen) !== -1 ||
        this.props.searchTagChosen === this.state.projectMainImageTag
      ) {
        axios
          .get(
            `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
              this.props.searchTagChosen
            }.json`
          )
          .then(res => {
            this.setState({ gallery: res.data.resources, message: "" });
            console.log(res.data.resources);
          })
          .catch(err => {
            this.setState({
              message: `Sorry we didn't find anything with that search tag. Click here to continue`
            });
            this.showErrorMessage();
          });
      } else {
        this.state.fullGallery.map((subject, index) => {
          subject.public_id.includes(this.props.searchTagChosen) &&
            this.setState({ gallery: [...this.state.gallery, subject] });

          return null;
        });
      }
    }
  }
  //SHOWIF: Search returns error
  //When button clicked, re-render page with initial search tag
  showErrorMessage = () => {
    const errorButton = (
      <div className="d-flex justify-content-center padtop3">
        <button
          className="btn btn-secondary"
          onClick={() =>
            this.props.setSearchTagChosen(this.state.projectMainImageTag)
          }
        >
          {this.state.message}
        </button>
      </div>
    );
    return errorButton;
  };

  // REMOVE FILE EXTENSION
  // Take the full file name of project selected, and extract the project name.
  // This will be used to set the project selected (props.ProjectChosen)
  getProjectName = fileName => {
    const projPlusFileName = fileName.slice(this.state.projectFile.length);
    const idx = projPlusFileName.indexOf("/");
    const projName = projPlusFileName.slice(0, idx);
    return projName;
  };

  // SHOW IF: Page selected === "home"
  showHome = () => {
    let viewIt;
    let projs;
    if (
      this.props.pageSelected === this.state.thisPage &&
      !this.state.message
    ) {
      projs = this.state.gallery.map(proj => {
        viewIt = (
          <div className="col-6 col-sm-4 col-xl-3" key={proj.public_id}>
            {/* <Animated
              animationIn="zoomIn"
              animationOut="zoomOut"
              isVisible={true}
            > */}
            <div className="projbox d-flex flex-column align-items-center padbottom padtop2">
              <Image
                onClick={() => {
                  this.props.setProjectChosen(
                    this.getProjectName(proj.public_id)
                  );
                  this.props.setPageSelect("project");
                }}
                cloudName={this.props.cloudName}
                publicId={proj.public_id}
                style={{ cursor: "pointer" }}
                className="projimg borderShadow"
                quality="10"
              />
              <div className="padtop text-center">
                <small className="currentfont">
                  {this.getProjectName(proj.public_id)}
                </small>
              </div>
            </div>
            {/* </Animated> */}
          </div>
        );
        return viewIt;
      });
    } else {
      viewIt = <div />;
    }
    return projs;
  };

  showTitle = () => {
    const title =
      this.props.searchTagChosen === this.props.projectMainImageTag
        ? "All recipe"
        : this.props.searchTagChosen;
    return title;
  };

  render() {
    if (this.props.pageSelected === this.state.thisPage) {
      window.scroll(0, 0);
    }
    return (
      <div>
        {this.state.message === "" ? null : this.showErrorMessage()}
        {this.props.projectChosen === "" ? null : <ProjectInd />}
        {this.props.pageSelected !== this.state.thisPage ? null : (
          <div className="container padtop2">
            <div className="row">
              <div className="col-12 offset-lg-1 col-lg-10">
                <div className="row no-gutters projtitle">
                  <div className="bigger spread text-left padtop2 m-2">
                    {this.showTitle()}s
                  </div>
                </div>
                <Animated
                  animationIn="zoomIn"
                  animationOut="zoomOut"
                  isVisible={true}
                >
                  <div className="row no-gutters padtop2 projtitle">
                    {this.showHome()}
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

PageHome.propTypes = {
  cloudinaryPojectFile: PropTypes.string.isRequired,
  projectMainImageTag: PropTypes.string.isRequired,
  cloudName: PropTypes.string.isRequired,
  pageSelected: PropTypes.string.isRequired,
  setProjectChosen: PropTypes.func.isRequired,
  setPageSelect: PropTypes.func.isRequired,
  projectChosen: PropTypes.string.isRequired
};

export default PageHome;
