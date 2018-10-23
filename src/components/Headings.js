import React from "react";
import PropTypes from "prop-types";

// SHOW ALWAYS: Will act as Router for pages.
function Headings(props) {
  // Map pages and show. If onClick, show that page and Bold Heading page name.
  let viewIt = "";
  let boldIt = "";
  viewIt = props.pages.map((p, i) => {
    boldIt = props.pageSelected === p ? "nav-link fade-bold" : "nav-link";
    return (
      <li className="nav-item" key={i}>
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
          className="navbar-toggler fade-bold"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon black currentfont">menu</span>
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

export default Headings;
