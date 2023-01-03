import React from 'react';

function Button(props) {
  console.log(`Button clicked ${props.children}`);
  return <button onClick={props.handleClick}>{props.children}</button>;
}

export default React.memo(Button);
