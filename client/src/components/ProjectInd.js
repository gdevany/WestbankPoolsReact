import React from 'react';
// import nanogallery2 from 'nanogallery2';


function ProjectInd(props) {

  var viewIt = "";
  var projPics = "";
  if(props.projectChosen === "") {
    return <div></div>
    } else {

      viewIt = (
        <div className="container">
          <div className="row black padtop">
             <div className="offset-sm-1 col-sm-8 offset-lg-1 col-lg-4 d-flex text-left flex-column">

               <div className="bigger projtitle">riverside</div>

               <div className="padtop2 padbottom">
                   They gave us a big check and told us to make it look nice.
                   So we took that big check and went to Vegas and had a great time.
                   Then we came back home and built them a great pool.
               </div>
             </div>

             <div className="col-sm-12 offset-lg-1 col-lg-5 d-flex justify-content-center">
               <div className="">
                 <img src={require('../pics/poolpic2.jpg')}
                   className="projimg"
                  />
                 <img src={require('../pics/poolpic2.jpg')}
                   style={{backgroundSize: '100% 100%'}}
                   className="projimg"
                  />
               </div>
             </div>

           </div>
         </div>
      )

      projPics = props.images.map((image) => {
        if(image.project === props.projectChosen) {
          return <img src={require(`../pics/${image.url}`)} />
          // return image.url;
        }
      })



    }
  return(
    <div>{viewIt}</div>
  )
}

export default ProjectInd;
