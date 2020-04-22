import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { GameInteractions } from './gameInteraction';
import { PlayerCards } from './playerCards';
import { FinaleModal } from './finaleModal';
import { GameBoard } from './boardGame';

export const Game = () => {
  const state = useSelector((state) => state);

  if (state.game.players.length !== 2) {
    return <Redirect to="/" />;
  }

  const players = state.game.players.map((player) => {
    return state.gameResources.characters.filter(
      (character) => character.name === player
    );
  });

  const roundAction = () => {
    const randomNumberBetweenOneAndSix = Math.floor(Math.random() * 6) + 1;
    console.log('Rolling dice');
  };

  const diceRolled = () => {
    console.log('Dice Rolled');
  };

  return (
    <>
      <main className="game">
        <GameInteractions diceRolled={diceRolled} />
        <GameBoard />
        <PlayerCards players={players} roundAction={roundAction} />
      </main>
      <FinaleModal />
    </>
  );
};
