import React from 'react';

function Process() {
  viewIt = "";
  if(props.pageSelected === 'process') {
    viewIt = <div>Hello</div>
  } else viewIt = <div></div>

  return {
    <div>{viewIt}</div>
  }
}

export default Process;
