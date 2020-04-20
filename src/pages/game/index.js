import React from 'react';
import { GameInteractions } from './gameInteraction';
import { PlayerCard } from './playerCards';
import { FinaleModal } from './finaleModal';
import { GameBoard } from './boardGame';

export const Game = () => {
  return (
    <>
      <main className="game">
        <GameInteractions />
        <GameBoard />
        <PlayerCard />
      </main>
      <FinaleModal />
    </>
  );
};
