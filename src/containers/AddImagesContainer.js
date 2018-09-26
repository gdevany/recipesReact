import { connect } from "react-redux";
import AddImages from "../components/AddImages";

function mapStateToProps(state) {
  return {
    cloudinaryFilePath: state.cloudinaryFilePath,
    projectMainImageTag: state.projectMainImageTag
  };
}

export default connect(mapStateToProps)(AddImages);
