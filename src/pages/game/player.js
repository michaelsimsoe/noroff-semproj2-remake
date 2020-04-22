import React from 'react';

export const Player = (props) => {
  return (
    <div className="card player-one-card" id="player-one-card">
      <h3>{props.player.name}</h3>
      <h4>{props.player.house}</h4>
      <h5>.</h5>
      <p>
        Last known position: <span className="player-position"></span>
      </p>
      <button onClick={props.rollDice} id="dice-btn-1" className="dice__button">
        ROLL
      </button>
    </div>
  );
};
