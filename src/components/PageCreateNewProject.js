import React from "react";
import AddImages from "../containers/AddImagesContainer";
import PropTypes from "prop-types";
import { Animated } from "react-animated-css";

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

  backButton = () => {
    return (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-dark padtop3 padbottom"
          onClick={() => {
            this.logOut();
          }}
        >
          cancel
        </button>
      </div>
    );
  };

  // Log out
  logOut = () => {
    this.setState({
      projName: "",
      caption: "",
      projectNamed: false,
      pword: "",
      loggedIn: false,
      tagsChosen: false,
      tags: []
    });
    this.props.setPage("home");
  };

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

  // SHOW IF: this.state.loggedIn
  // Check signIn Auth
  showSignIn = () => {
    return (
      <div className="lightBorder borderShadow padInsides d-flex flex-column align-items-center">
        <form
          onSubmit={e => {
            e.preventDefault();
            this.checkAuth();
          }}
        >
          <div className="d-flex flex-column col-12 padtop3 justify-content-center">
            <div>enter super secret password</div>
            <input
              autoFocus
              autoCapitalize="off"
              onChange={e => this.setState({ pword: e.target.value })}
            />
            <button className="btn btn-dark padtop2 padbottom" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    );
  };

  // TOGGLE SUBMIT BUTTON (showAddProjectName)
  // Enable button if new project NAMED and DESCRIPTION given
  handleSubmit = evt => {
    evt.preventDefault();
    if (!this.canBeSubmitted()) {
      return;
    }
    this.setState({ projectNamed: true });
  };

  canBeSubmitted() {
    const { projects } = this.state;
    return projects.projName.length > 0 && projects.caption.length > 0;
  }

  // SHOW IF: this.state.projectNamed === false && loggedIn === true
  // NAME NEW PROJECT
  // Input the new project name and caption(description).
  // When button is pressed, AddImages will open.
  // When project name entered, it will show in red, without input box.
  showAddProjectName = () => {
    const isEnabled = this.canBeSubmitted();
    const submitButtonMessage = this.canBeSubmitted() ? "submit " : "enter ";
    let addProjName = "";
    if (!this.state.projectNamed && this.state.loggedIn) {
      addProjName = (
        <div className="lightBorder borderShadow padInsides d-flex align-items-center flex-column">
          <h4 className="padtop2">Create New Project</h4>
          <form
            className="padbottom2 d-flex align-items-center flex-column"
            onSubmit={this.handleSubmit}
          >
            <div className="d-flex align-self-start padtop2">
              <div className="red bigger">*</div>
              <div>name</div>
            </div>
            <div className="">
              <input
                autoFocus
                size="30"
                onChange={e => {
                  const project = { projName: e.target.value };
                  this.setState({
                    projects: Object.assign(this.state.projects, project)
                  });
                }}
              />
            </div>
            <div className="d-flex align-self-start padtop2">
              <div className="red bigger">*</div>
              <div>description</div>
            </div>
            <div className="padbottom">
              <textarea
                placeholder="maxLength=1000 chars"
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
            <div className="d-flex align-self-start red bigger">
              * = required
            </div>
            <button
              className="btn btn-dark padtop2 padbottom"
              disabled={!isEnabled}
            >
              {submitButtonMessage}
              Name and Description
            </button>
          </form>
        </div>
      );
    } else if (
      this.state.projectNamed === true &&
      this.state.loggedIn === true
    ) {
      addProjName = (
        <div className="fade-bold padbottom text-center">
          {this.state.projects.projName}
        </div>
      );
    } else {
      addProjName = <div />;
    }
    return addProjName;
  };

  // SHOW IF: projectNamed && !tagsChosen
  // ADD TAGS
  // Maps through tags from state.subjects,
  // When selected, adds them to this.state.tags (sent with image)
  showTags = () => {
    let chooseTags = "";
    chooseTags = this.props.subjects.map(tag => {
      return (
        <div className="m-md-2" key={tag}>
          <button
            className={this.tagToggleClass(tag)}
            onClick={() => this.tagToggleInclude(tag)}
          >
            {tag}
          </button>
        </div>
      );
    });

    return (
      <div className="col-12 col-sm-10 offset-sm-1 justify-content-center text-center">
        select tag(s)
        <div className="d-flex flex-wrap justify-content-center lightBorder borderShadow">
          {chooseTags}
        </div>
        <div className="mx-auto text-center">
          {this.state.tags.length > 1 && (
            <button
              className="col-8 btn btn-dark padtop2 padbottom mx-auto"
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
    );
  };

  // SHOW IF: this.state.tagsChosen === true && thisPage.
  // ADD IMAGES component call
  // Show addImageBox IF new project named
  showAddImages = () => {
    return (
      <div className="col-10 offset-1 lightBorder borderShadow padbottom  d-flex flex-column align-items-center">
        <AddImages
          project={this.state.projects.projName}
          caption={this.state.projects.caption}
          tags={this.state.tags}
        />
      </div>
    );
  };

  render() {
    return this.state.thisPage === this.props.pageSelected ? (
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
        <div className="container">
          {this.state.tagsChosen && this.state.loggedIn
            ? null
            : this.backButton()}
          {!this.state.loggedIn && this.showSignIn()}
          {this.showAddProjectName()}
          {this.state.tagsChosen && this.state.loggedIn && this.showAddImages()}
          {this.state.projectNamed === true &&
            !this.state.tagsChosen &&
            this.state.loggedIn &&
            this.showTags()}
        </div>
      </Animated>
    ) : (
      <div />
    );
  }
}

PageCreateNewProject.propTypes = {
  setPage: PropTypes.func.isRequired
};

export default PageCreateNewProject;
