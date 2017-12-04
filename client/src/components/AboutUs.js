import React from 'react';

function AboutUs(props) {
   var viewIt = "";
  if(props.pageSelected === 'about') {
    viewIt = <div>Hello</div>
  } else viewIt = <div></div>

  return (
    <div>{viewIt}</div>
  )
}

export default AboutUs;
