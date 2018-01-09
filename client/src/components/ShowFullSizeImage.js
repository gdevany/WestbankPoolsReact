import React from 'react';
import {Image} from 'cloudinary-react';


// SHOW IF: <ProjectInd /> calls it
function ShowFullSizeImage(props) {
  console.log(props);
  window.scroll(0,30);
  return(
    <div>
      <Image
        cloudName={props.cloudName}
        publicId={props.image}
        className="projIndimg"
        ></Image>
      <span
        className="topRight white biggest"
        onClick={props.toggleShow}
        >X</span>
    </div>
  )
}

export default ShowFullSizeImage;
