import { connect } from "react-redux";
import { setPageSelect } from "../actions";
import PageSearch from "../components/PageSearch";

function mapStateToProps(state) {
  return {
    foodSubjects: state.foodSubjects,
    projects: state.projects,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudinaryPojectFile: state.cloudinaryPojectFile,
    projectMainImageTag: state.projectMainImageTag,
    cloudName: state.cloudName
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPageSelect: page => {
      dispatch(setPageSelect(page));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageSearch);
