import {connect} from "react-redux";
import ProjectInd from "../components/ProjectInd";
import {setProjectChosen} from "../actions";

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,
    projectChosen: state.projectChosen,
    cloudName: state.cloudName,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProjectChosen: (proj) => {
      dispatch(setProjectChosen(proj));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ProjectInd);
