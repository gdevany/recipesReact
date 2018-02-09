import {connect} from "react-redux";
import Contact from "../components/Contact";


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,
  };
}

export default connect(mapStateToProps)(Contact);
