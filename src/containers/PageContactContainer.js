import { connect } from "react-redux";
import PageContact from "../components/PageContact";

function mapStateToProps(state) {
  return {
    pageSelected: state.pageSelected
  };
}

export default connect(mapStateToProps)(PageContact);
