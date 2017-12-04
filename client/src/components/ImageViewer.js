import React from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';


function ImageViewer(props) {
  // console.log(props);
  console.log(props.imageList);
  var viewIt = "";
  var images = [];
  props.imageList.map(i => {
    return(
    images = [...images, {original:require(`../pics/${i.url}`),
      thumbnail:require(`../pics/${i.url}`)}]
    )
  })

  if(props.projectChosen !== "" && props.imageList.length > 1) {
    viewIt = (
      <ImageGallery items={images} />
    )
  } else viewIt = <div></div>


  return (
    <div>
    {viewIt}
  </div>
  )
}

export default ImageViewer;


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
