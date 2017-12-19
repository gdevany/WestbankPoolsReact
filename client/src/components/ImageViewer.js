import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

// only show if project image is selected from ProjectInd
class ImageViewer extends React.Component {

  render() {
    var viewIt = "";
    var images = [];

    // map out images for the projectSelected (props.imageList from ProjectInd)
    this.props.imageList.map(i => {
      return(
        images = [...images, {original:require(`../pics/${i.url}`),
          thumbnail:require(`../pics/${i.url}`)}]
      )
    })

    if(this.props.projectChosen !== "" && this.props.viewerList.length > 1) {
      window.scroll(0,230);
      viewIt = (
        <ImageGallery items={images} />
      )
    } else {
      viewIt = <div></div>
    }

    return (
      <div>
      {viewIt}
    </div>
    )
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
