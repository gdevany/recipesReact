import {connect} from "react-redux";
import Faqs from "../components/Faqs";


function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected,

  };
}

export default connect(mapStateToProps)(Faqs);
