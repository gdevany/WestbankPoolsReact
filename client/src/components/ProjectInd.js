import React from 'react';
// import ImageViewer from '../containers/ImageViewerContainer';
import axios from 'axios';
import {Image} from 'cloudinary-react';
import ShowFullSizeImage from './ShowFullSizeImage';


// SHOW IF: (projectChosen) && (pageSelected === projects)
class ProjectInd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: [],
      imageViewerClicked: false,
      imageClicked: "",
    }
  }

// Preload the list of 'TAGGED' projects from cloudinary
  componentWillMount() {
      axios.get(`https://res.cloudinary.com/gdevany/image/list/${this.props.projectChosen}.json`)
        .then(res => {
          console.log(res.data.resources);
          this.setState({gallery: res.data.resources});
        })
  }

// SHOW IF: this.state.imageClicked === true
// show full size rendering (<ShowFullSizeImage />)
  showFullSizeImage = () => {
    return(
      // this.state.imageViewerClicked === false ?
      // null : <ImageViewer imageList={this.state.gallery} />
      this.state.imageViewerClicked === false ?
      null : <ShowFullSizeImage image={this.state.imageClicked} />
    )
  }

  render() {
// SHOW IF: state.gallery is loaded with ProjectChosen image links
// Get project description
    var showDesc = "";
    if(this.state.gallery.length > 0) {
      showDesc = this.state.gallery[0].context.custom.caption;
    }

// SHOW IF: (projectChosen) && (pageSelected === projects)
// Map thru project pics (this.state.gallery) to show
    var viewIt = "";
    if(this.props.projectChosen !== "" && this.props.pageSelected === "projects") {
      window.scroll(0,230);
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
          <div className="projIndimg">{this.showFullSizeImage()}
          </div>
          <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">
            <div className="bigger projtitle">{this.props.projectChosen}</div>
            <div className="padtop2 padbottom">{showDesc}</div>
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
