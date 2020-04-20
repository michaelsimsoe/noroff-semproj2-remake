import React from 'react';

export const AlertBox = () => {
  return (
    <section
      class="alert-message alert-message--hidden"
      data-cy="alert-box"
      id="alert-msg"
    >
      <div class="alert-message__message"></div>
    </section>
  );
};
