import {connect} from "react-redux";
import AboutUs from "../components/AboutUs";


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,
  };
}

export default connect(mapStateToProps)(AboutUs);
