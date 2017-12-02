import React from 'react';
// import {Navbar,Nav,NavItem,} from "react-bootstrap";


function Headings(props) {
  // <a className="nav-link fade-bold" href="index.html" aria-haspopup="true" aria-expanded="false">
  //   {p}
  // </a>

const pageClicked = (p) => {
  props.setPage(p);
  console.log(props.pageSelected);

}

  var viewIt = "";
  viewIt = props.pages.map((p,i) =>{
    return (
      <li className="nav-item dropdown" key={i}>
        <div
          className="nav-link fade-bold"
          onClick={(e) => {e.preventDefault(); pageClicked(p)}}
          >{p}
        </div>
      </li>
    )
  })
console.log(props.pageSelected);
  return (
    <nav className="navbar navbar-toggleable-sm d-flex justify-content-center">
        <div className="d-flex justify-content-center navborder">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarnavdropdown" aria-controls="navbarnavdropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon black currentfont">menu</span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarnavdropdown">
            <ul className="navbar-nav">
              {viewIt}
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Headings;

// var viewIt = "";
//   viewIt = props.pages.map((p,i) => {
//     return(
//     <NavItem key={i}>{p}</NavItem>
//     )
//   })
//
//   return (
//     <Navbar collapseOnSelect>
//       <Navbar.Header>
//         <Navbar.Toggle />
//       </Navbar.Header>
//       <Navbar.Collapse>
//         <Nav className="displayInline d-flex">
//           {viewIt}
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }
// onClick={props.onSignOut}
