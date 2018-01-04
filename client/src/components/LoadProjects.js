import React from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import ProjectInd from '../containers/ProjectIndContainer';


class LoadProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      projectFile: this.props.cloudinaryPojectFile,
      projectMainImageTag: this.props.projectMainImageTag,
    }
  }

// PRELOAD PROJECTS tagged as (this.props.projectMainImageTag) from cloudinary
  componentWillMount() {
    axios.get(
      `https://res.cloudinary.com/gdevany/image/list/${this.state.projectMainImageTag}.json`
    )
      .then(res => {
        this.setState({gallery: res.data.resources});
      })
  }

// REMOVE FILE EXTENSION
// Take the full file name of project selected, and extract the project name.
// This will be used to set the project selected (props.ProjectChosen)
  getProjectName = (fileName) => {
    var projPlusFileName = fileName.slice(this.state.projectFile.length);
    var idx = projPlusFileName.indexOf("/");
    var projName = projPlusFileName.slice(0, idx);
    return projName;
  }

  render() {

// SHOW IF: 'projects' page is selected (default)
    var viewIt = "";
    var projs = "";
    if(this.props.pageSelected === 'projects') {
      window.scroll(0,0);
      projs = this.state.gallery.map(proj => {
      viewIt = (
       <div
        className="col-xs-12 offset-sm-0 col-sm-6 offset-md-0 col-md-4 padbottom2"
        key={proj.public_id}>
         <div className="d-flex flex-column">
           <div className="projbox">
               <Image
                 onClick={() => {
                   this.props.setProjectChosen(this.getProjectName(proj.public_id));
                 }}
                 cloudName="gdevany"
                 publicId={proj.public_id}
                 className="projimg">
               </Image>
           </div>
         </div>
       </div>
      )
      return viewIt;
      })
    } else {
      return <div></div>
    }

    return(
     <div>{this.props.projectChosen === "" ? null : <ProjectInd />}
      <div className="container">
        <div className="row">
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
            <div className="bigger d-flex text-left padtop3">projects</div>
          </div>
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
            <div>{projs}</div>
          </div>
        </div>
      </div>
     </div>
    )
  }
}

export default LoadProjects;
