import {connect} from "react-redux";
import ShowFullSizeImage from "../components/ShowFullSizeImage";


function mapStateToProps(state) {
  return {
    cloudName: state.cloudName,
    logo: state.logo
  };
}

export default connect(mapStateToProps)(ShowFullSizeImage);
