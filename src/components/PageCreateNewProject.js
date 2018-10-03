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

  componentDidMount = () => {
    this.setState({ tags: [this.props.appSubject] });
  };

  // Authorization check
  // This is TODO for future
  checkAuth = () => {
    let { pword } = this.state;
    if (pword === "g" || pword === "Gregiscool") {
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

  tagToggleInclude = tag => {
    if (this.state.tags.includes(tag)) {
      this.setState({ tags: this.state.tags.filter(t => t !== tag) });
    } else this.setState({ tags: [...this.state.tags, tag] });
  };

  tagToggleClass = tag => {
    if (this.state.tags.includes(tag)) {
      return "badge badge-primary";
    } else {
      return "badge badge-secondary";
    }
  };

  render() {
    // SHOW IF: this.state.loggedIn
    // Check signIn Auth
    let signIn = "";
    if (this.state.loggedIn) {
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
    if (!this.state.projectNamed && this.state.loggedIn) {
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

    //SHOW IF: projectNamed && !tagsChosen
    //ADD TAGS
    //Maps through tags from state.subjects,
    //When selected, adds them to this.state.tags (sent with image)
    let chooseTags = "";
    if (
      this.state.projectNamed === true &&
      !this.state.tagsChosen &&
      this.state.loggedIn
    ) {
      chooseTags = this.props.subjects.map(tag => {
        return (
          <div className="m-1" key={tag}>
            <button
              className={this.tagToggleClass(tag)}
              onClick={() => this.tagToggleInclude(tag)}
            >
              {tag}
            </button>
          </div>
        );
      });
    }

    // SHOW IF: this.state.tagsChosen === true && thisPage.
    // ADD IMAGES component call
    // Show addImageBox IF new project named
    let addImageBox = "";
    // if (this.state.projectNamed === true && this.state.loggedIn === true) {
    if (this.state.tagsChosen && this.state.loggedIn) {
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

    return this.state.thisPage === this.props.pageSelected ? (
      <div className="container">
        <div>
          <div className="row flex-column align-items-center">
            {signIn}
            {addProjectName}
            {addImageBox}
          </div>
          <div className="row col-12 col-sm-10 offset-sm-1 justify-content-center">
            {chooseTags}
            {this.state.projectNamed === true &&
              !this.state.tagsChosen && (
                <button
                  className="col-8 button button-secondary"
                  onClick={() => {
                    this.setState({
                      tagsChosen: true
                    });
                  }}
                >
                  Click here when done
                </button>
              )}
          </div>
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

PageCreateNewProject.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default PageCreateNewProject;
