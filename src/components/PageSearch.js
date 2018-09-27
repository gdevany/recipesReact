import React, { Component } from "react";

class PageSearch extends Component {
  state = {
    thisPage: "search"
  };
  render() {
    let viewIt = "";
    if (this.props.pageSelected !== this.state.thisPage) {
      viewIt = <div />;
    } else {
      viewIt = this.props.foodSubjects.map(food => {
        return <div key={food}>{food}</div>;
      });
    }
    return <div>{viewIt}</div>;
  }
}

export default PageSearch;
