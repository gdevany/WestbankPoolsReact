import React from 'react';


function LandingPage(props) {
// SHOW IF: pageSelected === ''
window.scroll(0,0);
  var viewIt = '';
  if(props.pageSelected === 'landing') {
    viewIt = (
      <div className="container">
            <img
              src={ require(`../pics/${props.landingPic}`) }
              className="landingPic"
              alt="background"
              />
            <span className="">
            <img src={require('../pics/WBPhome.png')} className="landingTextImage1" />
            <img src={require('../pics/WBPshould.png')} className="landingTextImage2" />
            </span>
      </div>
    )
  } else return <div></div>

  return(
    <div className="container">
      {viewIt}
    </div>
  )
}

export default LandingPage;

// <span className="landingText1 white bigger">Does this remind you of home?</span>
// <span className="landingText2 white bigger itally">....It should</span>
