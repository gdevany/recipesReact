import React from "react";
import {connect} from "react-redux";
import {setPageSelect, setProjectChosen} from "../actions";
import PropTypes from "prop-types";

// SHOW ALWAYS: Will act as Router for pages.
function Headings(props) {
  // Map pages and show. If onClick, show that page and Bold Heading page name.
  let viewIt = "";
  let boldIt = "";
  viewIt = props.pages.map((p, i) => {
    // If this page is pageSelected, color it, other-wise, don't.
    boldIt = props.pageSelected === p ? "nav-link red-title" : "nav-link dark-title";
    return (
      <li className="nav-item px-2" key={i}>
        <div
          aria-haspopup="true"
          aria-expanded="false"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          className={boldIt}
          style={{ cursor: "pointer" }}
          onClick={e => {
            e.preventDefault();
            props.setProjChosen("");
            props.setPage(p);
          }}
        >
          {p}
        </div>
      </li>
    );
  });
  return (
    <div className="logoBackground d-flex container-fluid justify-content-center">
      <nav className="row justify-content-center navbar navbar-expand-sm">
        <button
          className="navbar-toggler red-title"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon red">menu</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav tight">{viewIt}</ul>
        </div>
      </nav>
    </div>
  );
}

Headings.propTypes = {
  pages: PropTypes.array.isRequired,
  pageSelected: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    pages: state.pages,
    pageSelected: state.pageSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: (page) => {
      dispatch(setPageSelect(page));
    },
    setProjChosen: (proj) => {
      dispatch(setProjectChosen(proj));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Headings);