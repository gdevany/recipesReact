import React, { Component } from "react";

class PageSearch extends Component {
  state = {
    thisPage: "search"
  };

  setSubject = food => {
    this.props.setSearchTagChosen(food);
    this.props.setPageSelect("home");
  };

  activateTags = () => {
    //SHOW IF: thisPage === props.pageSelected
    //Maps through tags from props.subjects,
    //When selected, adds tag to props.searchTagChosen
    let chooseTags = "";
    if (this.state.thisPage === this.props.pageSelected) {
      chooseTags = this.props.subjects.map(tag => {
        return (
          <div className="m-1" key={tag}>
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
      <div className="container">
        <div className="row col-12 col-sm-10 offset-sm-1 justify-content-center">
          {this.activateTags()}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default PageSearch;
