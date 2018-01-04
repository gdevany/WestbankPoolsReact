import React from 'react';
import {Image} from 'cloudinary-react';


// SHOW IF: <ProjectInd /> calls it
function ShowFullSizeImage(props) {
  window.scroll(0,230);
  return(
    <div>
      <Image
        cloudName="gdevany"
        publicId={props.image}
        className="projIndimg"
        ></Image>
    </div>
  )
}

export default ShowFullSizeImage;
