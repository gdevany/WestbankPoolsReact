import React from 'react';


function ProjectInd(props) {
  var projPics = "";
  if(props.projectChosen === "") {
    return <div></div>
    } else {
      projPics = props.images.map((image,i) => {
        if(image.project === props.projectChosen) {
          return (<img
            src={require(`../pics/${image.url}`)}
            className="projimg"
            alt="project pics"
            key={i} />)
        } else return ""
      })
    }

  return(
    <div className="container">
      <div className="row black padtop">
        <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
          <div className="bigger projtitle">{props.projectChosen}</div>
          <div className="padtop2 padbottom">{props.projectInfo.desc}</div>
        </div>
        <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex justify-content-center">
            <div>{projPics}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInd;
