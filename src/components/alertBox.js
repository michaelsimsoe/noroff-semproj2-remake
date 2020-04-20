import React from 'react';

export const AlertBox = () => {
  return (
    <section
      className="alert-message alert-message--hidden"
      data-cy="alert-box"
      id="alert-msg"
    >
      <div className="alert-message__message"></div>
    </section>
  );
};
