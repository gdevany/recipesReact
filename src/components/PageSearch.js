import React, { Component } from "react";
import { connect } from "react-redux";
import { setPageSelect, setSearchTagChosen } from "../actions";
import { Animated } from "react-animated-css";

class PageSearch extends Component {
  state = {
    thisPage: "search",
    searchText: ""
  };

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  setSubject = food => {
    this.props.setSearchTagChosen(food);
    this.props.setPageSelect("home");
  };

  setTheSearchTag = e => {
    this.setState({ searchText: e.target.value });
  };

  searchFromText = () => {
    this.setSubject(this.state.searchText);
    this.setState({ searchText: "" });
  };

  activateTags = () => {
    //SHOW IF: thisPage === props.pageSelected
    //Maps through tags from props.subjects,
    //When selected, adds tag to props.searchTagChosen
    let chooseTags = "";
    if (this.state.thisPage === this.props.pageSelected) {
      chooseTags = this.props.subjects.map(tag => {
        return (
          <div className="my-1" key={tag}>
            <button
              className="badge badge-secondary"
              onClick={() => this.setSubject(tag)}
            >
              {tag}
            </button>
          </div>
        );
      });
    }
    return chooseTags;
  };

  render() {
    return this.props.pageSelected === this.state.thisPage ? (
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
        <div className="container">
          <div className="row col-12 col-lg-10 offset-lg-1 justify-content-center pt-5">
            <input onChange={e => this.setTheSearchTag(e)} autoFocus />
            {this.state.searchText.length > 0 && (
              <button className="btn btn-dark" onClick={this.searchFromText}>
                submit
              </button>
            )}
          </div>
          <div className="row col-12 col-lg-10 offset-lg-1 justify-content-center pt-3">
            {this.activateTags()}
          </div>
        </div>
      </Animated>
    ) : null;
  }
}

function mapStateToProps(state) {
  return {
    subjects: state.subjects,
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag,
    cloudName: state.cloudName,
    searchTagChosen: state.searchTagChosen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPageSelect: page => {
      dispatch(setPageSelect(page));
    },
    setSearchTagChosen: tag => {
      dispatch(setSearchTagChosen(tag));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSearch);
