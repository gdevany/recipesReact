import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import PropTypes from "prop-types";

class AddImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: "",
      selectedMainImage: false
    };
  }

  componentDidMount = () => {
    window.scroll(0, 0);
  };

  // removes the images file extension because cloudinary adds it
  removeExtension(fullName) {
    const idx = fullName.indexOf(".");
    const withoutExt = fullName.slice(0, idx);
    return withoutExt;
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    //IF: there is a project
    //IF: state.selectedMainImage, add2tags -> project, appSubject
    //ELSE: add2tags -> project, appSubject, MainImageTag, props.tags
    let tag;
    if (this.props.project) {
      if (this.state.selectedMainImage) {
        tag = `${this.props.project}, ${this.props.appSubject}`;
      } else {
        tag = `${this.props.project}, ${this.props.projectMainImageTag}, ${
          this.props.tags
        }, ${this.props.appSubject}`;
      }
    }

    const upload = request
      .post(`${this.props.CUU}`)
      .field("upload_preset", `${this.props.CUP}`)
      .field("file", file)
      .field("tags", [tag])
      .field("context", `caption=${this.props.caption}`)
      .field(
        "public_id",
        `${this.props.cloudinaryFilePath}/${this.props.project}/` +
          this.removeExtension(file.name)
      );

    upload.end((err, response) => {
      if (err) {
        //eslint-disable-next-line
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        //eslint-disable-next-line
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url,
          selectedMainImage: true
        });
      }
    });
  }

  showDropzone = () => {
    // SHOW IF: project has been named (this.props.project)
    let message = "CLICK HERE (or drag here) to add MAIN project image";

    if (this.state.selectedMainImage === true) {
      message = "Great! Now add project images";
    }

    let viewBox = "";
    if (!this.props.project) {
      viewBox = <div />;
    } else {
      window.scroll(0, 0);
      viewBox = (
        <div className="d-flex justify-content-center padtop2 padbottom2">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
          >
            <div className="text-center padInsides">{message}</div>
          </Dropzone>
        </div>
      );
    }
    return viewBox;
  };

  showConfirmationImage = () => {
    let viewIt = <div />;
    this.state.uploadedFileCloudinaryUrl === ""
      ? null
      : (viewIt = (
          <div className="d-flex flex-column align-items-center padbottom2">
            <p>Confirmation Image: </p>
            <p>{this.state.uploadedFile.name}</p>
            <img
              src={this.state.uploadedFileCloudinaryUrl}
              alt="test"
              className="imgAddConfirm"
            />
          </div>
        ));
    return viewIt;
  };

  render() {
    return (
      <form>
        <div className="">{this.showDropzone()}</div>
        <div>{this.showConfirmationImage()}</div>
      </form>
    );
  }
}

AddImages.propTypes = {
  project: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  cloudinaryFilePath: PropTypes.string.isRequired
};

export default AddImages;
