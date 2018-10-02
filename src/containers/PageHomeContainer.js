import { connect } from "react-redux";
import { setProjectChosen, setPageSelect } from "../actions";
import PageHome from "../components/PageHome";

function mapStateToProps(state) {
  return {
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    searchTagChosen: state.searchTagChosen,
    appSubject: state.appSubject,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag,
    cloudName: state.cloudName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProjectChosen: proj => {
      dispatch(setProjectChosen(proj));
    },
    setPageSelect: page => {
      dispatch(setPageSelect(page));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageHome);
