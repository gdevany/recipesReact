import React from "react";
import AddImages from "../containers/AddImagesContainer";
import PropTypes from "prop-types";

class PageCreateNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thisPage: "add recipe",
      projects: {
        projName: "",
        caption: "",
        projectNamed: false,
        pword: "",
        loggedIn: false,
        tagsChosen: false,
        tags: []
      }
    };
  }

  // Authorization check
  // This is TODO for future
  checkAuth = () => {
    let { pword } = this.state;
    if (pword === "gregiscool" || pword === "Gregiscool") {
      this.setState({ loggedIn: true });
    } else {
      alert("You shouldnt be here");
      this.logOut();
    }
  };

  // Log out
  logOut = () => {
    this.setState({ loggedIn: false, projectNamed: false });
    this.props.setPage("home");
  };

  render() {
    console.log(this.state.tags);
    // SHOW IF: pageSelected === thisPage
    // Check signIn Auth
    let signIn = "";
    if (
      this.props.pageSelected !== this.state.thisPage ||
      this.state.loggedIn
    ) {
      signIn = <div />;
    } else {
      signIn = (
        <form
          onSubmit={e => {
            e.preventDefault();
            this.checkAuth();
          }}
        >
          <div>
            <input
              autoFocus
              onChange={e => this.setState({ pword: e.target.value })}
            />
            <button type="submit">enter super secret password</button>
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
      // window.scroll(0,230);
      addProjectName = (
        <div className="fullSize borderShadow padInsides d-flex align-items-center flex-column">
          <button
            className="buttonGen padtop2"
            onClick={() => {
              this.logOut();
            }}
          >
            back
          </button>
          <h4 className="padtop2">Create New Project</h4>
          <form
            className="padbottom2 d-flex align-items-center flex-column"
            onSubmit={e => {
              e.preventDefault();
              this.setState({ projectNamed: true });
            }}
          >
            <div className="padtop2">
              <input
                autoFocus
                size="30"
                placeholder="Name    *required*"
                onChange={e => {
                  const project = { projName: e.target.value };
                  this.setState({
                    projects: Object.assign(this.state.projects, project)
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
                onChange={e => {
                  const projCaption = { caption: e.target.value };
                  this.setState({
                    projects: Object.assign(this.state.projects, projCaption)
                  });
                }}
              />
              <div className="">
                {this.state.projects.caption.length}
                /1000
              </div>
            </div>
            <button>Create new project</button>
          </form>
        </div>
      );
    } else if (
      this.state.projectNamed === true &&
      this.state.loggedIn === true
    ) {
      addProjectName = (
        <div className="fade-bold padbottom text-center">
          {this.state.projects.projName}
        </div>
      );
    } else {
      addProjectName = <div />;
    }

    let chooseTags = "";
    let tagSelected = [this.props.appSubject];
    if (this.state.projectNamed === true && !this.state.tagsChosen) {
      chooseTags = (
        <div className="col-8 offset-2 d-flex flex-wrap justify-content-center padtop3">
          {this.props.subjects.map(tag => {
            return (
              <button
                key={tag}
                className="badge badge-secondary"
                onClick={() => {
                  tagSelected.push(tag);
                }}
              >
                {tag}
              </button>
            );
          })}
          <button
            className="button button-secondary"
            onClick={() => {
              this.setState({
                tags: tagSelected,
                tagsChosen: true
              });
            }}
          >
            Click here when done
          </button>
        </div>
      );
    }

    // SHOW IF: this.state.tagsChosen === true.
    // ADD IMAGES component call
    // Show addImageBox IF new project named
    let addImageBox = "";
    // if (this.state.projectNamed === true && this.state.loggedIn === true) {
    if (this.state.tagsChosen) {
      addImageBox = (
        // fullSize borderShadow padInsides d-flex align-items-center flex-column
        <div className="col-12 borderShadow padbottom  d-flex flex-column align-items-center">
          <button
            className="buttonGen padtop2"
            onClick={() => {
              alert("Please REFRESH page to see the newest addition");
              this.props.setPage("home");
              this.logOut();
            }}
          >
            click here when done
          </button>
          <AddImages
            project={this.state.projects.projName}
            caption={this.state.projects.caption}
            tags={this.state.tags}
          />
        </div>
      );
    } else {
      addImageBox = <div />;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 d-flex flex-column align-items-center">
            <div className="">{signIn}</div>
            <div>
              {addProjectName}
              {chooseTags}
              {addImageBox}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PageCreateNewProject.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default PageCreateNewProject;
