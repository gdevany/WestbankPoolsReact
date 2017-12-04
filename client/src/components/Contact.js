import React from 'react';

function Contact(props) {
   var viewIt = "";
  if(props.pageSelected === 'contact') {
    viewIt = <div>Hello</div>
  } else viewIt = <div></div>

  return (
    <div>{viewIt}</div>
  )
}

export default Contact;
