import React from 'react';


function LandingPage(props) {
// SHOW IF: pageSelected === ''
  var viewIt = '';
  if(props.pageSelected === 'landing') {
    viewIt = (
      <div className="container">
            <img
              src={ require(`../pics/${props.landingPic}`) }
              className="landingPic"
              alt="background"
              />
            <span className="topCentered white big">Does this remind you of home?</span>
            <span className="centered2 white big itally">....It should</span>
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

// function LandingPage(props) {
//   const logoImg = {
//     background: 'url(' + require(`../pics/${props.landingPic}`) + ') no-repeat top',
//     backgroundSize: 'cover'
//   };
//
//   var viewIt = '';
//   if(props.pageSelected === '') {
//     viewIt = (
//       <div className="row">
//             <div style={logoImg} className="landingPic">
//               <span className="white bigger landingText1">Does this remind you of home?</span>
//               <span className="white itally big landingText2">....It should</span>
//             </div>
//       </div>
//     )
//   } else return <div></div>
//
//   return(
//     <div className="container">
//       {viewIt}
//     </div>
//   )
// }
