import React from 'react';
import './loader.scss';

export const Loader = (props) => {
  const displayStyle = {
    display: props.loading ? 'block' : 'none',
  };
  return (
    <div className="dots" id="dots-loader" style={displayStyle}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
