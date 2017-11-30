import React from 'react';

function Headings() {
  return (

    <nav className="navbar navbar-toggleable-sm d-flex justify-content-center">
        <div className="d-flex justify-content-center navborder">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarnavdropdown" aria-controls="navbarnavdropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon black currentfont">menu</span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarnavdropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link fade-bold" href="index.html" aria-haspopup="true" aria-expanded="false">
                  portfolio
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                  process
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                  faq's
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                  about
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" aria-haspopup="true" aria-expanded="false">
                  contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link" href="forms.html" aria-haspopup="true" aria-expanded="false">
                  documents
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Headings;
