import React from "react";
import axios from "axios";
import {Image} from "cloudinary-react";
import ProjectInd from "../containers/ProjectIndContainer";

// LANDING PAGE
class LoadProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      projectFile: this.props.cloudinaryPojectFile,
      projectMainImageTag: this.props.projectMainImageTag,
    };
  }

// PRELOAD PROJECTS tagged as (this.props.projectMainImageTag) from cloudinary
  componentWillMount() {
    axios.get(
      `https://res.cloudinary.com/${this.props.cloudName}/image/list/${this.state.projectMainImageTag}.json`
    )
      .then(res => {
        this.setState({gallery: res.data.resources});
      });
  }

// REMOVE FILE EXTENSION
// Take the full file name of project selected, and extract the project name.
// This will be used to set the project selected (props.ProjectChosen)
  getProjectName = (fileName) => {
    const projPlusFileName = fileName.slice(this.state.projectFile.length);
    const idx = projPlusFileName.indexOf("/");
    const projName = projPlusFileName.slice(0, idx);
    return projName;
  }

  showProjInd = () => {
    if (this.props.projectChosen !== "") {
      return (
        <ProjectInd />
      );
    }
  }

  render() {
// SHOW IF: "projects" page is selected
    let viewIt = "";
    var projs = "";
    if(this.props.pageSelected === "projects") {
      window.scroll(0,0);
      projs = this.state.gallery.map(proj => {
      viewIt = (
       <div
        className="col-xs-12 col-sm-6 col-md-4 padbottom2"
        key={proj.public_id}>
        <div className="d-flex flex-column align-items-center">
             <Image
               onClick={() => {
                 this.props.setProjectChosen(this.getProjectName(proj.public_id));
                 this.props.setPageSelect("");
               }}
               cloudName={this.props.cloudName}
               publicId={proj.public_id}
               style={{cursor:"pointer"}}
               className="projimg projbox">
             </Image>
          <div className="padtop">
               {this.getProjectName(proj.public_id)}
             </div>
        </div>

       </div>
     );
        return viewIt;
      });
    } else {
      viewIt = <div />;
    }

    return (
      <div>{this.props.projectChosen === "" ? null : <ProjectInd />}
        {this.props.pageSelected !== "projects" ? null :
        <div className="container">
          <div className="row">
            <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
              <div className="bigger spread d-flex text-left padtop2">projects</div>
            </div>
            <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 projtitle">
              <div className="padtop2">{projs}</div>
            </div>
          </div>
        </div>}
      </div>
    );
  }
}

export default LoadProjects;
