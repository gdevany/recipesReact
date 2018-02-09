import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import PropTypes from "prop-types";


const CLOUDINARY_UPLOAD_PRESET = "um4mdnly";
const CLOUDINARY_UPLOAD_URL = "https://api.cloudinary.com/v1_1/gdevany/upload";

class AddImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: "",
      selectedMainImage: false,
    };
  }

// removes the images file extension because cloudinary adds it
  removeExtension(fullName) {
    const idx = fullName.indexOf(".");
    const withoutExt = fullName.slice(0,idx);
    return withoutExt;
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let tag = `${this.props.project}`;
    if (this.state.selectedMainImage === false) {
      tag = `${this.props.project}, main`;
    }

    const upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file)
      .field("tags", [tag])
      .field("context", `caption=${this.props.caption}`)
      .field("public_id", `${this.props.cloudinaryFilePath}/${this.props.project}/` +
        this.removeExtension(file.name));

    upload.end((err, response) => {
      if (err) {
        //eslint-disable-next-line
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        //eslint-disable-next-line
        console.log(this.state.uploadedFileCloudinaryUrl);
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          selectedMainImage: true
        });
      }
    });
  }

  render() {
    let message = "CLICK HERE (or drag here) to add MAIN project image";
    if (this.state.selectedMainImage === true) {
      message = "Great! Now add project images";
    }

// SHOW IF: project has been named (this.props.project)
    let viewBox = "";
    if (!this.props.project) {
      viewBox = <div />;
    } else {
      viewBox = (
        <div className="d-flex justify-content-center padtop2 padbottom2">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*">
            <div>{message}</div>
          </Dropzone>
        </div>
      );
    }

    return (
      <form>
        <div className="">
          {viewBox}
        </div>
        <div>
          {this.state.uploadedFileCloudinaryUrl === "" ? null :
          <div className="padbottom2">
            <p>Confirmation Image: </p>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt="test"
              className="imgAddConfirm"
              />
          </div>}
        </div>
      </form>
    );
  }
}

AddImages.propTypes = {
  project: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  cloudinaryFilePath: PropTypes.string.isRequired,
};

export default AddImages;
