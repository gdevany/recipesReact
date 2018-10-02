import { connect } from "react-redux";
import AddImages from "../components/AddImages";

function mapStateToProps(state) {
  return {
    CUP: state.CLOUDINARY_UPLOAD_PRESET,
    CUU: state.CLOUDINARY_UPLOAD_URL,
    cloudinaryFilePath: state.cloudinaryFilePath,
    projectMainImageTag: state.projectMainImageTag,
    searchTagChosen: state.searchTagChosen
  };
}

export default connect(mapStateToProps)(AddImages);
