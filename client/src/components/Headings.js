import React from 'react';


function Headings(props) {

  var viewIt = "";
  var boldIt = "";
  viewIt = props.pages.map((p,i) =>{
    boldIt = (props.pageSelected === p) ? "nav-link fade-bold" : "nav-link"
console.log(`props.projectChosen:${props.pageSelected} p:${p}`);
    return (
      <li className="nav-item dropdown" key={i}>
        <div
          aria-haspopup="true"
          aria-expanded="false"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          className={boldIt}
          onClick={(e) => {e.preventDefault(); props.setProjChosen(""); props.setPage(p)}}
          >{p}
        </div>
      </li>
    )
  })
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
