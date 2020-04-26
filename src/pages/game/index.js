import React, { useEffect, useState, useReducer } from 'react';
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
  setGameWinner,
} from '../../actions/index';

import { gameTiles } from './assets/game_tiles';
import {
  localInitialState,
  localReducer,
  addNewTrapAction,
  removeTrapAmount,
} from './localState';

export const Game = () => {
  const [localState, localDispatch] = useReducer(
    localReducer,
    localInitialState
  );
  const [diceRolling, setDiceRolling] = useState(null);
  const [playerMoving, setPlayerMoving] = useState(false);
  const [gameStories, setGameStories] = useState([]);
  const [winner, setWinner] = useState('');
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
    const currentPlayer = state.game.gameState.currentPlayer.name;
    if (
      localState[currentPlayer] &&
      localState[currentPlayer].trap.consequence.amount > 0
    ) {
      addStoryItem(
        currentPlayer,
        `${currentPlayer} is stil waiting`,
        'waiting'
      );
      localDispatch(removeTrapAmount(currentPlayer));
      changeCurrentPlayer();
      return;
    }
    setDiceRolling(diceNumber);
    dispatch(setDiceRoll(diceNumber, true));
  };

  const diceRolled = () => {
    setDiceRolling(false);
    dispatch(setDiceRoll(state.game.gameState.diceNumber, false));
    addStoryItem(
      state.game.gameState.currentPlayer,
      `${state.game.gameState.currentPlayer.name} rolls a ${state.game.gameState.diceNumber}`,
      'dice-roll'
    );
    movePlayer();
  };

  const movePlayer = (number = null) => {
    let moved = 1;
    const amount = number ? number : state.game.gameState.diceNumber;
    setPlayerMoving(true);
    const moves = setInterval(() => {
      let currentPlayer = state.game.gameState.currentPlayer.name;
      if (moved <= amount) {
        let placement = fetchPlacementForCurrentPlayer() + moved;
        let xPosition = gameTiles[placement].x;
        let yPosition = gameTiles[placement].y;
        setMovePosition({
          player: currentPlayer,
          x: xPosition,
          y: yPosition,
        });
        if (gameTiles[placement].position === 'Kings Landing') {
          addStoryItem('game', `${currentPlayer} wins the Throne!!`, '');
          setTimeout(() => {
            setWinner(currentPlayer);
          }, 1000);
          dispatch(setGameWinner(currentPlayer));
          clearInterval(moves);
        }
        moved++;
      } else {
        let currentPosition = fetchPlacementForCurrentPlayer() + amount;
        clearInterval(moves);
        setPlayerMoving(false);
        checkForTrap(currentPosition, currentPlayer);
        dispatch(
          addMovesToPlayer(state.game.gameState.currentPlayer.name, amount)
        );
        if (amount === 6 && gameTiles[currentPosition].trap === '') {
          addStoryItem(
            'game',
            `${currentPlayer} rolls a six. Please go again!`,
            'six-roll'
          );
          dispatch(setDiceRoll(null, false));
          return;
        }
        changeCurrentPlayer();
      }
    }, 500);
  };

  const movePlayerBackwards = (player, amount, startPosition) => {
    let moved = -1;
    setPlayerMoving(true);
    const moves = setInterval(() => {
      if (moved >= amount - 1) {
        let placement = startPosition + moved;
        let xPosition = gameTiles[placement].x;
        let yPosition = gameTiles[placement].y;
        setMovePosition({
          player: player,
          x: xPosition,
          y: yPosition,
        });
        moved--;
      } else {
        clearInterval(moves);
        setPlayerMoving(false);
        dispatch(
          addMovesToPlayer(state.game.gameState.currentPlayer.name, amount)
        );
      }
    }, 700);
  };

  const changeCurrentPlayer = () => {
    const currentPlayer = state.game.gameState.currentPlayer.name;
    if (currentPlayer === players[0][0].name) {
      addStoryItem('game', `${players[1][0].name}s turn`, 'player-change');
      dispatch(setCurrentPlayer(players[1][0]));
    } else {
      addStoryItem('game', `${players[0][0].name}s turn`, 'player-change');
      dispatch(setCurrentPlayer(players[0][0]));
    }
  };

  const fetchPlacementForCurrentPlayer = () => {
    const currentPlayer = state.game.gameState.currentPlayer.name;
    const moves = state.game.players.filter(
      (player) => player.name === currentPlayer
    );
    return moves[0].moves;
  };

  const checkForTrap = (placement, player) => {
    if (gameTiles[placement].trap !== '') {
      if (gameTiles[placement].trap.consequence.type === 'return') {
        addStoryItem(
          player,
          `${player} is in trouble: ${
            gameTiles[placement].trap.releaseTrap().text
          }`,
          'trap'
        );
        movePlayerBackwards(
          player,
          -Math.abs(+gameTiles[placement].trap.consequence.amount),
          placement
        );
      } else {
        addStoryItem(
          player,
          `${player} is in trouble: ${
            gameTiles[placement].trap.releaseTrap().text
          }`,
          'trap'
        );
        localDispatch(addNewTrapAction(player, gameTiles[placement].trap));
      }
    }
  };

  const checkWinner = (pos) => {};

  const addStoryItem = (player, story, type) => {
    setGameStories((prevState) => {
      return [...prevState, { player, type, story }];
    });
  };

  return (
    <>
      <main className="game">
        <GameInteractions
          rollDice={diceRolling}
          diceRolled={diceRolled}
          stories={gameStories}
        />
        <GameBoard players={players} moveToken={movePosition} />
        <PlayerCards
          players={players}
          newRound={newRound}
          moving={playerMoving}
          position={movePosition}
        />
      </main>
      <FinaleModal winner={winner} />
    </>
  );
};
