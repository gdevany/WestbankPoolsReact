import React from 'react';
import {Image} from 'cloudinary-react';


// SHOW IF: <ProjectInd /> calls it
function ShowFullSizeImage(props) {
  window.scroll(0,190);
  return(
    <div className="container">
      <Image
        cloudName={props.cloudName}
        publicId={props.image}
        className="projIndimg"
        ></Image>
      <div className="row">
        <span
          className="topRight white biggest"
          onClick={props.toggleShow}
          >X
        </span>
      </div>
      <div className="row">
        <img
          src={require(`../pics/${props.logo}`)}
          className="miniLogo"
          alt="logo"
        />
      </div>
    </div>
  )
}

export default ShowFullSizeImage;
