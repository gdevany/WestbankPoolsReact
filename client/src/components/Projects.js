import React from 'react';


function Projects(props) {

  const projs = props.projects.map((p,i) => {
    const projPicUrl = p.url;
    const stylePic = {
      background: 'url(' + require(`../pics/${projPicUrl}`) + ') no-repeat center',
      backgroundSize: 'cover'
    };
    return(

            // <img
            //   key={i}
            //   src={require(`../pics/${projPicUrl}`)}
            //   alt="project pic"
            // />

      <div className="col-xs-12 col-md-4">
        <div className="d-flex flex-column align-items-center">
          <div className="projbox">
            <div className="d-flex bgcover img-fluid" style={stylePic}></div>
          </div>
          <div className="d-flex justify-content-center">{p.projName}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8
          justify-content-between">
            <div>{projs}</div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
