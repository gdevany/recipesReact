import React, { Component } from "react";

class PageSearch extends Component {
  state = {
    thisPage: "search"
  };

  setSubject = food => {
    this.props.setSearchTagChosen(food);
  };

  render() {
    let viewIt = "";
    if (this.props.pageSelected !== this.state.thisPage) {
      viewIt = <div />;
    } else {
      viewIt = (
        <div className="col-xs-12 d-flex flex-wrap">
          {this.props.foodSubjects.map(food => {
            return (
              <button
                key={food}
                className="padsides"
                onClick={() => {
                  this.setSubject(food);
                }}
              >
                {food}
              </button>
            );
          })}
        </div>
      );
    }
    return <div>{viewIt}</div>;
  }
}

export default PageSearch;
