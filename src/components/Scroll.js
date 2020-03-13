import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid black', padding: '10px 0', height: '77vh'}}>
      {props.children}
    </div>
  )
};

export default Scroll;
