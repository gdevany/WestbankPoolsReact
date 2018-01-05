import React from 'react';

function Logo(props) {
  const logoImg = {
    background: 'url(' + require(`../pics/${props.logo}`) + ') no-repeat center',
    backgroundSize: 'contain'
  };

  var viewIt = '';
  if(props.pageSelected !== '') {
    viewIt = (
      <div className="row">
        <div className="col-sm-6 offset-sm-3 col-lg-8 offset-lg-2">
          <div className="seclogo">
            <div style={logoImg} className="logoinit"></div>
          </div>
        </div>
      </div>
    )
  }

  return(
    <div className="container">
      {viewIt}
    </div>

  )
}

export default Logo;

// const stylePic = {
//          background: 'url(' + require(`../pics/${p.url}`) + ') no-repeat center'
//        };


// import React from 'react';
//
// function Logo() {
//   return(
//     <div className="container">
//       <div className="row">
//         <div className="col-sm-6 offset-sm-3 col-lg-8 offset-lg-2">
//           <div className="seclogo">
//             <div className="logoinit"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//
//   )
// }
//
// export default Logo;
