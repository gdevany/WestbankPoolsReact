import React from 'react';

function Faqs(props) {
   var viewIt = "";
  if(props.pageSelected === 'faqs') {
    viewIt = <div>Hello</div>
  } else viewIt = <div></div>

  return (
    <div>{viewIt}</div>
  )
}

export default Faqs;
