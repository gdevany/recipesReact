import {connect} from "react-redux";
import Process from "../components/Process";


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,

  };
}

export default connect(mapStateToProps)(Process);
