import React from 'react';
import axios from 'axios';
import {CloudinaryContext, Image} from 'cloudinary-react';


class LoadProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }

  componentDidMount() {
    axios.get('https://res.cloudinary.com/gdevany/image/list/main.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources});
      })
  }

 render() {

   var viewIt = "";
   var projs = "";

   if(this.props.pageSelected === 'projects') {

      projs =  <CloudinaryContext cloudName="gdevany"> {
         this.state.gallery.map(proj => {
           viewIt = (
             <div className="col-xs-12 offset-sm-0 col-sm-6 offset-md-0 col-md-4 padbottom2"
               key={proj.public_id}>
               <div className="d-flex flex-column">
                 <div className="projbox">
                     <Image publicId={proj.public_id} className="projimg"></Image>
                 </div>
               </div>
             </div>
           )
           return viewIt;
         })
       }</CloudinaryContext>

   } else {
     viewIt = <div></div>
   }

   return(
     <div>
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
