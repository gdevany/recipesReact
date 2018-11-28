import React from "react";
import Dropzone from "react-dropzone";
import Loader from "react-loader-spinner";
import axios from "axios";
import request from "superagent";
import PropTypes from "prop-types";

class AddImages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileName: null,
      uploadedFileCloudinaryUrl: "",
      selectedMainImage: false,
      listOfAllProjects: [],
      fileLoading: false,
      fileLoaded: false
    };
  }

  //Preload a list of all image names (this.state.listOfAllProjects)
  componentDidMount = () => {
    window.scroll(0, 0);
    axios
      .get(
        `https://res.cloudinary.com/${this.props.cloudName}/image/list/${
          this.props.appSubject
        }.json`
      )
      .then(res => {
        let listOfProjects = [];
        res.data.resources.map(t => {
          let strippedFileNameIndex = t.public_id.lastIndexOf("/") + 1;
          let strippedFileName = t.public_id.slice(strippedFileNameIndex);
          listOfProjects.push(strippedFileName);
          return null;
        });
        this.setState({ listOfAllProjects: listOfProjects });
      });
  };

  // removes the images file extension because cloudinary adds it
  removeExtension(fullName) {
    const idx = fullName.indexOf(".");
    const withoutExt = fullName.slice(0, idx);
    return withoutExt;
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    this.setState({
      fileLoaded: false,
      fileLoading: true,
      uploadedFileCloudinaryUrl: ""
    });

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

    //strippedFileName = (original name) OR (original name + random#)
    let strippedFileName = this.removeExtension(file.name);
    if (this.state.listOfAllProjects.includes(strippedFileName)) {
      strippedFileName = strippedFileName + Math.floor(Math.random() * 1000);
    }

    //Add this file name to state.listOfAllProjects
    this.setState({
      listOfAllProjects: [...this.state.listOfAllProjects, strippedFileName],
      uploadedFileName: strippedFileName
    });

    const upload = request
      .post(`${this.props.CUU}`)
      .field("upload_preset", `${this.props.CUP}`)
      .field("file", file)
      .field("tags", [tag])
      .field("context", `caption=${this.props.caption}`)
      .field(
        "public_id",
        `${this.props.cloudinaryFilePath}/${
          this.props.project
        }/${strippedFileName}`
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
          selectedMainImage: true,
          fileLoaded: true,
          fileLoading: false
        });
      }
    });
  }

  buttonMessage = () => {
    let message = this.state.selectedMainImage
      ? "click here when done"
      : "cancel";
    return message;
  };

  alertMessage = () => {
    let message = this.state.selectedMainImage
      ? "Please REFRESH page to see the newest addition"
      : "Start over";
    return message;
  };

  showDropzone = () => {
    // SHOW IF: project has been named (this.props.project) && !fileLoading
    let message = "Add MAIN project image";

    if (this.state.selectedMainImage === true) {
      message = "Now add project images";
    }

    let viewBox = "";
    if (!this.props.project || this.state.fileLoading) {
      viewBox = <div />;
    } else {
      window.scroll(0, 0);
      viewBox = (
        <div className="d-flex flex-column align-items-center padtop2 padbottom2">
          <button
            className="btn btn-dark padtop3 padbottom"
            onClick={() => {
              alert(this.alertMessage());
              this.logOut();
            }}
          >
            {this.buttonMessage()}
          </button>
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
          >
            <div className="text-center padInsides">
              <div className="">CLICK HERE</div>
              <div className="text-center padInsides">{message}</div>
            </div>
          </Dropzone>
        </div>
      );
    }
    return viewBox;
  };

  showLoading = () => {
    return (
      <div className="d-flex justify-content-center">
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
      </div>
    );
  };

  showConfirmationImage = () => {
    let viewIt;
    this.state.uploadedFileCloudinaryUrl === ""
      ? (viewIt = <div />)
      : (viewIt = (
          <div className="d-flex flex-column align-items-center padbottom2">
            <p>Confirmation Image: </p>
            <p>{this.state.uploadedFileName}</p>
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
        {this.state.fileLoading && this.showLoading()}
        {this.state.fileLoaded && this.showConfirmationImage()}
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
