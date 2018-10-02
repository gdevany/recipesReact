import { connect } from "react-redux";
import { setPageSelect, setSearchTagChosen } from "../actions";
import PageSearch from "../components/PageSearch";

function mapStateToProps(state) {
  return {
    subjects: state.subjects,
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag,
    cloudName: state.cloudName,
    searchTagChosen: state.searchTagChosen
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
)(PageSearch);
