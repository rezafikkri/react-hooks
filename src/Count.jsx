import React from 'react';

function Count(props) {
  console.log("Count rendering");
  return <p>{props.text} is {props.count}</p>
}

export default React.memo(Count);
