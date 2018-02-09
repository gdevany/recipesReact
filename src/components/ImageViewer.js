/* eslint-disable */
import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import {Image} from "cloudinary-react";

// NOTE: THIS IMAGEVIEWER WILL NOT READ <Image> FILES FROM CLOUDINARY
// NOTE: https://glitch.com/edit/#!/cloudinary-react-sdk?path=src/app.js:1:0

// only show if project image is selected from ProjectInd
class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    };
  }

  componentWillMount() {
    this.setState({gallery: this.props.imageList});
  }

  render() {
    console.log(this.state.gallery);
    let viewIt = "";
    let images = [];

    // map out images for the projectSelected (props.imageList from ProjectInd)
    this.state.gallery.map(i => {
      return (
        // images = [...images, {original:require(`../pics/${i.url}`),
        //   thumbnail:require(`../pics/${i.url}`)}]
          images = [...images, {
            original: <Image cloudName="gdevany" publicId={i.public_id} />,
            thumbnail: <Image cloudName="gdevany" publicId={i.public_id} />
          }]
      );
    });
    if (this.props.projectChosen !== "" && this.state.gallery.length >= 1) {
      console.log({images});
      window.scroll(0,230);
      viewIt = (
        // <ImageGallery items={images} />
        <ImageGallery
          items={[{
            original: <Image cloudName="gdevany"
              publicId={this.state.gallery[0].public_id} />,
            thumbnail: <Image cloudName="gdevany"
              publicId={this.state.gallery[0].public_id} />}]} />

          );
    } else {viewIt = <div />;}

    return (
      <div>{viewIt}</div>
    );
  }
}

export default ImageViewer;

// THIS IS FUNCTIONING IMAGEVIEWER WITHOUT REACT-IMAGE-GALLERY INSTALLED
// function ImageViewer(props) {
//   // console.log(props);
//
//   var imageList = props.imageList;
//   console.log(props.imageList);
//   var viewIt = "";
//
//   if(props.projectChosen !== "" && imageList.length > 1) {
//     viewIt = <div onClick={() => props.setViewerList([])}>sdfasdfasdfasd</div>
//   } else viewIt = <div></div>
//
//
//   return (
//     <div>
//     {viewIt}
//   </div>
//   )
// }
//
// export default ImageViewer;
