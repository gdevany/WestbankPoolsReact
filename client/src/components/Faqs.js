import React from 'react';

function Faqs(props) {
  var viewIt = "";

  if(props.pageSelected === 'faqs') {
    viewIt = <div>Hello</div>
  } else return <div></div>

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 justify-content-between">
            <div className="bigger projtitle d-flex text-left">faq's</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs;
