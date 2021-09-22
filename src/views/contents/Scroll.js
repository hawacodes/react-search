import React from 'react';

//components inside rendered with height of 100 viewport height and turn them into scrollable content.
const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', height: '100vh' }}>
      {props.children}
    </div>
  );
}

export default Scroll;