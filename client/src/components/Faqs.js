import React from 'react';


function Faqs(props) {
// SHOW IF: props.pageSelected = 'faqs'
  var viewIt = "";
  if(props.pageSelected === 'faqs') {
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
                <div className="big red">how do we plan the design of the pool?</div>
                <div className="">
                  Our in house designers will walk you through the process using
                  state of the art digital cad. We will determine if a straight
                  edge or free form design works better.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">how much does the pool cost?</div>
                <div className="">
                  Every pool has it's own challenges during the construction
                  process. Our experienced project estimators have a track record
                  of 8% difference between estimates and actual costs.
                </div>
              </div>
              <div className="col-xs-12 offset-lg-1 col-lg-10 text-left padtop3">
                <div className="big red">can we pay for the pool on our credit card?</div>
                <div className="">
                  We have had several customers pay for their phase drafts on their
                  credit cards. However, there will be an additional cost to cover
                  the interchange costs.
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
            <div className="bigger projtitle d-flex text-left padtop3">faq's</div>
            <div>{viewIt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs;
