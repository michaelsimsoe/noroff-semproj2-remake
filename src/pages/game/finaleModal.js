import React from 'react';

export const FinaleModal = () => {
  return (
    <div id="finale-modal" data-cy="finale-modal" class="finale-modal">
      <div class="finale-modal__content">
        <h2>
          Congratulations, <span id="game-winner"></span>!
        </h2>
        <p>You are the first to reach Kings Landing!</p>
      </div>
    </div>
  );
};
