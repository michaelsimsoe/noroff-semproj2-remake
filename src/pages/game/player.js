import React from 'react';
import { useSelector } from 'react-redux';

export const Player = (props) => {
  const state = useSelector((state) => state);
  let activePlayer = false;

  const rollDice = () => {
    const randomNumberBetweenOneAndSix = Math.floor(Math.random() * 6) + 1;
    props.newRound(randomNumberBetweenOneAndSix);
  };

  if (state.game.gameState.currentPlayer) {
    activePlayer =
      state.game.gameState.currentPlayer.name === props.player.name;
  }
  const cardClass = activePlayer ? 'card card--active' : 'card';
  const buttonText = activePlayer ? 'ROLL' : 'Waiting';
  return (
    <div className={cardClass}>
      <h3>{props.player.name}</h3>
      <h4>{props.player.house}</h4>
      <h5>.</h5>
      <p>
        Last known position: <span className="player-position"></span>
      </p>
      <button
        onClick={rollDice}
        id="dice-btn-1"
        className="dice__button"
        disabled={state.game.gameState.diceRolling || !activePlayer}
      >
        {buttonText}
      </button>
    </div>
  );
};
