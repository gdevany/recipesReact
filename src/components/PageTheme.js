import React from "react";
import { connect } from "react-redux";
import { setTheme, setPageSelect } from "../actions";
import { Animated } from "react-animated-css";

function ChooseTheme(props) {
  let viewIt = "";
  if (props.pageSelected === "theme") {
    viewIt = (
      <div className="d-flex flex-column lightBorder justify-content-center m-4">
        <button
          className="btn btn-light"
          onClick={ () => props.setTheme("theme-light")}
        >
          light
        </button>
        <button
          className="btn btn-dark"
          onClick={ () => props.setTheme("theme-dark")}
        >
          dark
        </button>
      </div>
    );
  } else {
    return <div />;
  }
  return (
    <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={true}>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 offset-lg-1 col-lg-10">
            <div className="row no-gutters projtitle bigger spread text-left m-2">
              choose a theme
            </div>
            {viewIt}
          </div>
        </div>
      </div>
    </Animated>
  );
}

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setTheme: theme => {
      dispatch(setTheme(theme));
    },
    setPage: page => {
      dispatch(setPageSelect(page))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseTheme);
