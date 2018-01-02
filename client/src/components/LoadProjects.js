import React from 'react';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import ProjectInd from '../containers/ProjectIndContainer';


class LoadProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      projectFile: "wbp/projects/",
    }
  }

  componentWillMount() {
    axios.get('https://res.cloudinary.com/gdevany/image/list/main.json')
      .then(res => {
        this.setState({gallery: res.data.resources});
      })
  }

// Take the full file name of project selected, and extract the project name.
// Set the project selected in this.state
// This removes the extension
  getProjectName = (fileName) => {
    var projPlusFileName = fileName.slice(this.state.projectFile.length);
    var idx = projPlusFileName.indexOf("/");
    var projName = projPlusFileName.slice(0, idx);
    return projName;
  }

 render() {
   // console.log(`projectSelected: ${this.props.projectChosen}`);
   var viewIt = "";
   var projs = "";

   // Only show if 'projects' page is selected (default)
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

// render() {
//    return(
//      <div>
//        <CloudinaryContext cloudName="gdevany"> {
//          this.state.gallery.map(proj => {
//            return(
//              <div key={proj.public_id}>
//                <Image publicId={proj.public_id}></Image>
//              </div>
//            )
//          })
//          }
//        </CloudinaryContext>
//      </div>
//    )
//  }


// <CloudinaryContext cloudName="gdevany"> {
//   this.state.gallery.map(proj => {
//     return(
//       <div className="col-xs-12 offset-sm-0 col-sm-6 offset-md-0 col-md-4 padbottom2">
//         <div className="d-flex flex-column">
//           <div className="projbox">
//             <div key={proj.public_id}>
//               <Image publicId={proj.public_id}></Image>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   })
//   }
// </CloudinaryContext>

// <div className="col-xs-12 offset-sm-0 col-sm-6 offset-md-0 col-md-4 padbottom2" key={i}>
//   <div className="d-flex flex-column">
//     <div className="projbox">
//       <img
//         onClick={ (e) => {
//           e.preventDefault();
//           props.setProjChosen(p.projName)
//           props.setViewerList([])
//         }}
//         src={require(`../pics/${p.url}`)}
//         className="projimg"
//         alt="project pics"
//         style={{cursor:'pointer'}}
//         key={i}
//         />
//       <div className="d-flex justify-content-center padtop">{p.projName}</div>
//     </div>
//   </div>
// </div>
