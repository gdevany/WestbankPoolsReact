import React from 'react';
import ProjectInd from '../containers/ProjectIndContainer';


function Projects(props) {

  var viewIt = "";
  var projs = "";

  if(props.pageSelected === "projects" || props.pageSelected === "") {
      projs = props.projects.map((p,i) => {

      const stylePic = {
        background: 'url(' + require(`../pics/${p.url}`) + ') no-repeat center'
      };

      viewIt = (
          <div className="col-xs-12 col-md-4" key={i}>
            <div className="d-flex flex-column align-items-center">
              <div className="projbox">
                <div
                  className="d-flex bgcover img-fluid"
                  style={stylePic}
                  onClick={ (e) => {e.preventDefault(); props.setProjChosen(p.projName)}}>
                </div>
                <div className="d-flex justify-content-center">{p.projName}</div>
              </div>
            </div>
          </div>
        )
      return viewIt;
    })
  } else return <div></div>

  return (
    <div>
      <ProjectInd />
        <div className="container">
          <div className="row">
            <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 justify-content-between">
              <div className="bigger projtitle d-flex text-left">Projects</div>
              <div>{projs}</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;
