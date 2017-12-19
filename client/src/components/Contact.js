import React from 'react';

function Contact(props) {
  var viewIt = "";

  if(props.pageSelected === 'contact') {
    window.scroll(0,0);
    viewIt = (
      <div>
        <div className="container padbottom2 projtitle">
          <div className="row">
            <div className="offset-xs-1 col-xs-10 offset-md-2 col-md-8
              offset-lg-3 col-lg-6 projtitle padtop2">
              <div className="big">Customer Satisfaction</div>
              <div className="text-left">
                Our overall mission is customer satisfaction. From the first meeting
                until the customer jumps in the water, we want to make sure they
                are clear on what phase we are currently on and what comes next.
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">
                  <i className="fa fa-phone" aria-hidden="true"></i>phone
                </div>
                <div className="">
                  512-217-8004
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>email
                </div>
                <div className="">
                  hello@westbankpools.com
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">
                  <i className="fa fa-twitter" aria-hidden="true"></i>twitter
                </div>
                <div className="">
                  #westbank
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } else return <div></div>

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8 justify-content-between">
            <div className="bigger projtitle d-flex text-left padtop3">contact us</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
