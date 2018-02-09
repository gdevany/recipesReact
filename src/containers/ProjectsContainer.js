import {connect} from "react-redux";
import Projects from "../components/Projects";
import {setProjectChosen, setViewerList} from "../actions";


function mapStateToProps(state) {
  return {
    projects: state.projects,
    images: state.images,
    loggedIn: state.loggedIn,
    pageSelected: state.pageSelected,

  };
}

function mapDispatchToProps(dispatch) {
  return {
    setProjChosen: (proj) => {
      dispatch(setProjectChosen(proj));
    },
    setViewerList: (l) => {
      dispatch(setViewerList(l));
    }
  };
}

// export default connect(mapStateToProps,mapDispatchToProps)(Projects);
export default connect(mapStateToProps,mapDispatchToProps)(Projects);
