import React from 'react';
import ImageViewer from '../containers/ImageViewerContainer';


// Only show if project has been selected (from Projects.js) and page = projects.
function ProjectInd(props) {
  var viewIt = "";
  var imageList = "";

  if(props.projectChosen !== "" && props.pageSelected === "projects") {
    // Map thru project pics to show
    viewIt = props.images.map((image,i) => {
      if(image.project === props.projectChosen) {
        imageList = [...imageList, image];
        return (<img
          onClick={() => {props.setViewerList(imageList)}}
          src={require(`../pics/${image.url}`)}
          className="projIndimg"
          alt="project pics"
          style={{cursor:'pointer'}}
          key={i} />)
      } else return ""
    })

  } else {
    return <div></div>
  }

  return(
    <div className="container">
      <div className="row black padtop">
        <div className="projIndimg"><ImageViewer imageList={props.viewerList} /></div>

        <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
          <div className="bigger projtitle">{props.projectChosen}</div>
          <div className="padtop2 padbottom">{props.projectInfo.desc}</div>
        </div>
        <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center">
          <div>Click image to start ImageViewer</div>
          <div>{viewIt}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInd;
