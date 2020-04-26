import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { gameTiles } from './assets/game_tiles';

export const Player = (props) => {
  const [activePlayer, setActivePlayer] = useState(false);
  const [position, setPosition] = useState('unkown');
  const state = useSelector((state) => state);

  useEffect(() => {
    if (state.game.gameState.currentPlayer) {
      if (state.game.gameState.currentPlayer.name === props.player.name) {
        setActivePlayer(true);
      } else {
        setActivePlayer(false);
      }
    }

    if (activePlayer) {
      setPosition(
        gameTiles.find(
          (tile) => tile.x === props.position.x && tile.y === props.position.y
        ).position
      );
    }
    // eslint-disable-next-line
  }, [state.game.gameState.currentPlayer]);

  const rollDice = () => {
    const randomNumberBetweenOneAndSix = Math.floor(Math.random() * 6) + 1;
    props.newRound(randomNumberBetweenOneAndSix);
  };

  const cardClass = activePlayer ? 'card card--active' : 'card';
  const buttonText = activePlayer ? 'ROLL' : 'Waiting';
  return (
    <div className={cardClass}>
      <h3>{props.player.name}</h3>
      <h4>{props.player.house}</h4>
      <h5>.</h5>
      <p>
        Last known position: <span className="player-position">{position}</span>
      </p>
      <button
        onClick={rollDice}
        id="dice-btn-1"
        className="dice__button"
        disabled={
          state.game.gameState.diceRolling || !activePlayer || props.moving
        }
      >
        {buttonText}
      </button>
    </div>
  );
};
