import React from 'react';
// import nanogallery2 from 'nanogallery2';
import NanoJQuery from './NanoJQuery';

function ProjectInd() {

  // const viewIt = "";
  // if(props.)
// <img src={require('../pics/poolpic1.jpg')} />
  var viewIt = "";
  viewIt = (

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
         <div id="my_nanogallery2" className="d-flex flex-column">gallery_made_with_nanogallery2
           <a href={require('../pics/poolpic1.jpg')} data-ngthumb={require('../pics/poolpic1.jpg')}>test</a>
           <a href="poolpic1.jpg" data-ngthumb="poolpic1.jpg">riverside1</a>
           <a href="poolpic2.jpg" data-ngthumb="poolpic2.jpg">riverside2</a>
           <a href="poolpic3.jpg" data-ngthumb="poolpic3.jpg">riverside3</a>
           <a href="poolpic4.jpg" data-ngthumb="poolpic4.jpg">riverside4</a>
         </div>
       </div>

     </div>
  )

  return(
    <div>{viewIt}</div>
  )
}

export default ProjectInd;
