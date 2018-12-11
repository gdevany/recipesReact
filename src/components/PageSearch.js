import React, { Component } from "react";
import { Animated } from "react-animated-css";

class PageSearch extends Component {
  state = {
    thisPage: "search"
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
      <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
        <input onChange={e => this.setTheSearchTag(e)} />
        <button onClick={this.searchFromText} />
        <div className="container">
          <div className="row col-12 col-sm-10 offset-sm-1 justify-content-center">
            {this.activateTags()}
          </div>
        </div>
      </Animated>
    ) : null;
  }
}

export default PageSearch;
