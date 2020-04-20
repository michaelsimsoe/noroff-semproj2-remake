import React from 'react';

export const PlayerCard = () => {
  return (
    <section class="game__player-cards">
      <div class="card player-one-card" id="player-one-card">
        <h3>Player One</h3>
        <h4>.</h4>
        <h5>.</h5>
        <p>
          Last known position: <span class="player-position"></span>
        </p>
        <button id="dice-btn-1" class="dice__button">
          ROLL
        </button>
      </div>
      <div class="card player-two-card" id="player-two-card">
        <h3>Player Two</h3>
        <h4>.</h4>
        <h5>.</h5>
        <p>
          Last known position: <span class="player-position"></span>
        </p>
        <button id="dice-btn-2" class="dice__button">
          ROLL
        </button>
      </div>
    </section>
  );
};
