import {connect} from "react-redux";
import ImageViewer from "../components/ImageViewer";
import {setViewerList} from "../actions";

function mapStateToProps(state) {
  return {
    viewerList: state.viewerList,
    projectChosen: state.projectChosen
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setViewerList: (l) => {
      dispatch(setViewerList(l));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ImageViewer);
