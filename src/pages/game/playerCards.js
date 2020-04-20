import React from 'react';

export const PlayerCard = () => {
  return (
    <section className="game__player-cards">
      <div className="card player-one-card" id="player-one-card">
        <h3>Player One</h3>
        <h4>.</h4>
        <h5>.</h5>
        <p>
          Last known position: <span className="player-position"></span>
        </p>
        <button id="dice-btn-1" className="dice__button">
          ROLL
        </button>
      </div>
      <div className="card player-two-card" id="player-two-card">
        <h3>Player Two</h3>
        <h4>.</h4>
        <h5>.</h5>
        <p>
          Last known position: <span className="player-position"></span>
        </p>
        <button id="dice-btn-2" className="dice__button">
          ROLL
        </button>
      </div>
    </section>
  );
};
