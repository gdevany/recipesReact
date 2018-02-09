import {connect} from "react-redux";
import Logo from "../components/Logo";


function mapStateToProps(state) {
  return {
    logo: state.logo,
    pageSelected: state.pageSelected,
  };
}

export default connect(mapStateToProps)(Logo);
