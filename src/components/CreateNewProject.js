import React from "react";
import AddImages from "../containers/AddImagesContainer";
import PropTypes from "prop-types";


class CreateNewProject extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: {
        projName: "",
        caption: "",
        projectNamed: false,
        secBoxClicked: false,
        pword: "",
        loggedIn: false,
      }
    };
  }

// Set this.state.projectNamed === true if form submitted
  projectNameAdded = () => {
    return (
      this.setState({ projectNamed: true})
    );
  }

// Authorization check
  checkAuth = () => {
    if (this.state.pword === "" ||
      this.state.pword === undefined ||
      this.state.pword.length < 10) {
        // alert("You shouldnt be here");
      this.setState({secBoxClicked: false});
      this.logOut();
      this.props.setPage("projects");
    } else {
      this.setState({loggedIn: true, secBoxClicked: false});
    }
  }

// Log out
  logOut = () => {
    this.setState({loggedIn: false});
  }

  render() {
// SHOW IF: secBoxClicked === true
// Onced secret box clicked, check signIn Auth
    let signIn = "";
    if (!this.state.secBoxClicked) {
      signIn = <div />;
    } else {
      signIn = (
        <form onSubmit={(e) => {e.preventDefault(); this.checkAuth();}}>
          <div>
            <input
              autoFocus
              onChange={(e) => this.setState({pword: e.target.value})} />
            <button type="submit">submit</button>
          </div>
        </form>
      );
    }

// SHOW IF: this.state.projectNamed === false && loggedIn === true
// NAME NEW PROJECT
// Input the new project name and caption(description).
// When button is pressed, AddImages will open.
// When project name entered, it will show in red, without input box.
    let addProjectName = "";
    if (!this.state.projectNamed === true && this.state.loggedIn === true) {
      window.scroll(0,230);
      addProjectName = (
        <div className="fullSize borderShadow padInsides d-flex align-items-center flex-column">
          <button
            className="backButton padtop2"
            onClick={() => {
              this.props.setPage("projects");
              this.logOut();
            }}>back
          </button>
          <h1 className="padtop2">Create New Project</h1>
          <form className="padbottom2 d-flex align-items-center flex-column" onSubmit={(e) => {
            e.preventDefault();
            this.projectNameAdded();
          }}>
            <div className="padtop3">
              <input
                autoFocus
                size="30"
                placeholder="Name    *required*"
                onChange={(e) => {
                  const project = {projName: e.target.value};
                  this.setState({
                    projects: Object.assign(this.state.projects,project)
                  });
                }}
              />
            </div>
            <div className="padtop2 padbottom">
              <textarea
                placeholder="Description    *required*    maxLength=1000 chars"
                maxLength="1000"
                rows="4"
                cols="30"
                onChange={(e) => {
                  const projCaption = {caption: e.target.value};
                  this.setState({
                    projects: Object.assign(this.state.projects,projCaption)
                  });
                }}
                />
              <div className="">
                {this.state.projects.caption.length}/1000
              </div>
            </div>
            <button>Create new project</button>
          </form>
        </div>
      );
    } else if (this.state.projectNamed === true && this.state.loggedIn === true) {
      addProjectName = (
        <div className="fade-bold">{this.state.projects.projName}</div>
      );
    } else {addProjectName = <div />;}

// SHOW IF: this.state.projectNamed === true && loggedIn === true.
// ADD IMAGES component call
// Show addImageBox IF new project named
    let addImageBox = "";
    if (this.state.projectNamed === true && this.state.loggedIn === true) {
      addImageBox = (
        <div>
          <div>
            <div className="col-sm-8 offset-sm-2 borderShadow padbottom2">
              <button
                className="backButton padtop3"
                onClick={() => {
                  this.props.setPage("projects");
                  this.logOut();
                }}>click here when done
              </button>
              <AddImages
                project={this.state.projects.projName}
                caption={this.state.projects.caption}
              />
            </div>
          </div>
        </div>);
    } else {
      addImageBox = <div />;
    }

    return (
      <div>
        <div className="container">
          <div className="row float-right">
            <div className="projboxx"
              onClick={() => {
                this.setState({secBoxClicked: true});
                this.props.setPage("");
              }} />
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 d-flex flex-column align-items-center">
              <div className="">{signIn}</div>

              {addProjectName}

              {addImageBox}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateNewProject.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default CreateNewProject;
