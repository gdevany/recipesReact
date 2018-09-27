import React, { Component } from "react";

class PageSearch extends Component {
  state = {
    thisPage: "search"
  };

  setSubject = food => {
    this.props.setSearchTagChosen(food);
  };

  render() {
    let viewIt;
    if (this.props.pageSelected !== this.state.thisPage) {
      viewIt = <div />;
    } else {
      viewIt = (
        <div className="col-8 offset-2 d-flex flex-wrap justify-content-center">
          {this.props.foodSubjects.map(food => {
            return (
              <button
                key={food}
                className="padsides padInsides padtop padbottom"
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
