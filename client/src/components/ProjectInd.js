import React from 'react';


function ProjectInd(props) {
  var viewIt = "";
  console.log(`projectChosen: ${props.projectChosen}`);
  if(props.projectChosen !== "" && props.pageSelected === "projects") {

    viewIt = props.images.map((image,i) => {
      if(image.project === props.projectChosen) {

        return (<img
          src={require(`../pics/${image.url}`)}
          className="projimg"
          alt="project pics"
          key={i} />)
      } else return ""
    })

  } else {
    return <div></div>
  }

  return(
    <div className="container">
      <div className="row black padtop">
        <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
          <div className="bigger projtitle">{props.projectChosen}</div>
          <div className="padtop2 padbottom">{props.projectInfo.desc}</div>
        </div>
        <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex justify-content-center">
            <div>{viewIt}</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectInd;
