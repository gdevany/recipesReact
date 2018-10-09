import { connect } from "react-redux";
import {
  setProjectChosen,
  setPageSelect,
  setSearchTagChosen
} from "../actions";
import PageHome from "../components/PageHome";

function mapStateToProps(state) {
  return {
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    appSubject: state.appSubject,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag,
    cloudName: state.cloudName,
    searchTagChosen: state.searchTagChosen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProjectChosen: proj => {
      dispatch(setProjectChosen(proj));
    },
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
)(PageHome);
