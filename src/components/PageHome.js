import React from "react";
import axios from "axios";
import { Image } from "cloudinary-react";
import ProjectInd from "../containers/ProjectIndContainer";
import PropTypes from "prop-types";

// LANDING PAGE
class PageHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: "home",
      gallery: [],
      projectFile: this.props.cloudinaryPojectFile,
      projectMainImageTag: this.props.projectMainImageTag
    };
  }

  // PRELOAD PROJECTS tagged as (this.props.projectMainImageTag) from cloudinary
  componentDidMount() {
    axios
      .get(
        `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
          this.props.searchTagChosen
        }.json`
      )
      .then(res => {
        this.setState({ gallery: res.data.resources });
        console.log(res.data.resources);
      });
    window.scroll(0, 0);
  }

  componentDidUpdate(prevProps) {
    if (this.props.searchTagChosen !== prevProps.searchTagChosen) {
      axios
        .get(
          `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
            this.props.searchTagChosen
          }.json`
        )
        .then(res => {
          this.setState({ gallery: res.data.resources });
        });
    }
  }

  // REMOVE FILE EXTENSION
  // Take the full file name of project selected, and extract the project name.
  // This will be used to set the project selected (props.ProjectChosen)
  getProjectName = fileName => {
    const projPlusFileName = fileName.slice(this.state.projectFile.length);
    const idx = projPlusFileName.indexOf("/");
    const projName = projPlusFileName.slice(0, idx);
    return projName;
  };

  showHome = () => {
    // SHOW IF: Page selected === "home"
    let viewIt = "";
    let projs = "";
    if (this.props.pageSelected === this.state.thisPage) {
      projs = this.state.gallery.map(proj => {
        viewIt = (
          <div className="col-6 col-sm-4 col-xl-3" key={proj.public_id}>
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
          </div>
        );
        return viewIt;
      });
    } else {
      viewIt = <div />;
    }
    return projs;
  };

  render() {
    if (this.props.pageSelected === this.state.thisPage) {
      console.log(this.props.searchTagChosen);
    }
    return (
      <div>
        {this.props.projectChosen === "" ? null : <ProjectInd />}
        {this.props.pageSelected !== this.state.thisPage ? null : (
          <div className="container padtop3">
            <div className="row">
              <div className="col-12 offset-lg-1 col-lg-10">
                <div className="row no-gutters projtitle">
                  <div className="bigger spread text-left padtop2 m-2">
                    {this.props.searchTagChosen}s
                  </div>
                </div>
                <div className="row no-gutters padtop2 projtitle">
                  {this.showHome()}
                </div>
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
