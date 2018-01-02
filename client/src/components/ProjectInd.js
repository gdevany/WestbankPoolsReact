import React from 'react';
import ImageViewer from '../containers/ImageViewerContainer';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import ShowFullSizeImage from './ShowFullSizeImage';


// Only show if project has been selected (from Projects.js) and page = projects.
class ProjectInd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      imageViewerClicked: false,
      imageClicked: "",
    }
  }

// Preload the list of 'main' project tags from cloudinary
  componentWillMount() {
      axios.get(`https://res.cloudinary.com/gdevany/image/list/${this.props.projectChosen}.json`)
        .then(res => {
          console.log(res.data.resources);
          this.setState({gallery: res.data.resources});
        })
  }

  showFullSizeImage = () => {
    return(
      // this.state.imageViewerClicked === false ?
      // null : <ImageViewer imageList={this.state.gallery} />
      this.state.imageViewerClicked === false ?
      null : <ShowFullSizeImage image={this.state.imageClicked} />
    )
  }

  render() {
    var viewIt = "";

    if(this.props.projectChosen !== "" && this.props.pageSelected === "projects") {
      // Map thru project pics to show
      window.scroll(0,0);

      viewIt = this.state.gallery.map(image => {
        return(
          <Image
            onClick={() => {
              this.setState({imageViewerClicked: true, imageClicked:image.public_id});
            }}
            cloudName="gdevany"
            publicId={image.public_id}
            className="projIndimg"
            style={{cursor:'pointer'}}
            key={image.public_id}>
          </Image>
        )
      })
    } else return <div></div>

    return(
      <div className="container">
        <div className="row black padtop">
          <div className="projIndimg">{
              this.showFullSizeImage()
            }
            </div>

          <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
            <div className="bigger projtitle">{this.props.projectChosen}</div>
            <div className="padtop2 padbottom">{this.props.projectInfo.desc}</div>
          </div>
          <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center">
            <div>Click image to view full size</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    )
  }

}

export default ProjectInd;




// import React from 'react';
// import ImageViewer from '../containers/ImageViewerContainer';
//
//
// // Only show if project has been selected (from Projects.js) and page = projects.
// function ProjectInd(props) {
//   var viewIt = "";
//   var imageList = "";
//
//   if(props.projectChosen !== "" && props.pageSelected === "projects") {
//     // Map thru project pics to show
//     window.scroll(0,0);
//     viewIt = props.images.map((image,i) => {
//       if(image.project === props.projectChosen) {
//         imageList = [...imageList, image];
//         return (<img
//           onClick={() => {props.setViewerList(imageList)}}
//           src={require(`../pics/${image.url}`)}
//           className="projIndimg"
//           alt="project pics"
//           style={{cursor:'pointer'}}
//           key={i} />)
//       } else return ""
//     })
//
//   } else {
//     return <div></div>
//   }
//
//   return(
//     <div className="container">
//       <div className="row black padtop">
//         <div className="projIndimg"><ImageViewer imageList={props.viewerList} /></div>
//
//         <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
//           <div className="bigger projtitle">{props.projectChosen}</div>
//           <div className="padtop2 padbottom">{props.projectInfo.desc}</div>
//         </div>
//         <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex flex-column justify-content-center">
//           <div>Click image to start ImageViewer</div>
//           <div>{viewIt}</div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default ProjectInd;
