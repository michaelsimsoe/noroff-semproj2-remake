import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GameInteractions } from './gameInteraction';
import { PlayerCards } from './playerCards';
import { FinaleModal } from './finaleModal';
import { GameBoard } from './boardGame';

import {
  setCurrentPlayer,
  setDiceRoll,
  addMovesToPlayer,
} from '../../actions/index';
import { gameTiles } from './assets/game_tiles';

export const Game = () => {
  const [diceRolling, setDiceRolling] = useState(null);
  const [movePosition, setMovePosition] = useState({
    player: null,
    x: '170',
    y: '370',
  });
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const players = state.game.players
    ? state.game.players.map((player) => {
        return state.gameResources.characters.filter(
          (character) => character.name === player.name
        );
      })
    : [];

  useEffect(() => {
    if (players.length > 0) {
      dispatch(setCurrentPlayer(players[0][0]));
    }
    // eslint-disable-next-line
  }, []);

  if (state.game.players.length !== 2) {
    return <Redirect to="/" />;
  }

  const newRound = (diceNumber) => {
    setDiceRolling(diceNumber);
    dispatch(setDiceRoll(diceNumber, true));
  };

  const diceRolled = () => {
    setDiceRolling(false);
    dispatch(setDiceRoll(state.game.gameState.diceNumber, false));
    movePlayer();
  };

  const movePlayer = () => {
    let moved = 0;
    const moves = setInterval(() => {
      if (moved < state.game.gameState.diceNumber) {
        console.log(fetchPlacementForCurrentPlayer());
        setMovePosition({
          player: state.game.gameState.currentPlayer.name,
          x: gameTiles[fetchPlacementForCurrentPlayer() + moved + 1].x,
          y: gameTiles[fetchPlacementForCurrentPlayer() + moved + 1].y,
        });
        moved++;
      } else {
        clearInterval(moves);
        dispatch(
          addMovesToPlayer(
            state.game.gameState.currentPlayer.name,
            state.game.gameState.diceNumber
          )
        );
        changeCurrentPlayer();
      }
    }, 1000);
  };

  const changeCurrentPlayer = () => {
    const currentPlayer = state.game.gameState.currentPlayer.name;
    if (currentPlayer === players[0][0].name) {
      dispatch(setCurrentPlayer(players[1][0]));
    } else {
      dispatch(setCurrentPlayer(players[0][0]));
    }
  };

  const fetchPlacementForCurrentPlayer = () => {
    const currentPlayer = state.game.gameState.currentPlayer.name;
    const moves = state.game.players.filter(
      (player) => player.name === currentPlayer
    );
    console.log('moves', moves[0].moves);
    return moves[0].moves;
  };

  return (
    <>
      <main className="game">
        <GameInteractions rollDice={diceRolling} diceRolled={diceRolled} />
        <GameBoard players={players} moveToken={movePosition} />
        <PlayerCards players={players} newRound={newRound} round />
      </main>
      <FinaleModal />
    </>
  );
};
