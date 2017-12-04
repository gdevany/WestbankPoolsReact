import React from 'react';

function ImageViewer(props) {
  // console.log(props);

  var imageList = props.imageList;
  console.log(props.imageList);
  var viewIt = "";

  if(props.projectChosen !== "" && imageList.length > 1) {
    viewIt = <div onClick={() => props.setViewerList([])}>sdfasdfasdfasd</div>
  } else viewIt = <div></div>


  return (
    <div>
    {viewIt}
  </div>
  )
}

export default ImageViewer;
