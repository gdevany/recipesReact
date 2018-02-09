import {connect} from "react-redux";
import LandingPage from "../components/LandingPage";


function mapStateToProps(state) {
  return {
    landingPic: state.landingPic,
    pageSelected: state.pageSelected,
  };
}

export default connect(mapStateToProps)(LandingPage);
