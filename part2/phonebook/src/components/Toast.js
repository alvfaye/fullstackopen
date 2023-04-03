import React from 'react';

function Toast({ message, style }) {
  
  return <div className={style}>{message}</div>;
}

export default Toast;
