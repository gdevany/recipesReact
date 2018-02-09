import {connect} from "react-redux";
import CreateNewProject from "../components/CreateNewProject";
import {setPageSelect} from "../actions";


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setPage: (page) => {
      dispatch(setPageSelect(page));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateNewProject);
