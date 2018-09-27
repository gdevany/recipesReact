import { connect } from "react-redux";
import PageCreateNewProject from "../components/PageCreateNewProject";
import { setPageSelect } from "../actions";

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: page => {
      dispatch(setPageSelect(page));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageCreateNewProject);
