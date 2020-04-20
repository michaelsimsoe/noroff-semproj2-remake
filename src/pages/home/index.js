import React from 'react';
import { Intro } from './intro';
import { GameSelect } from './gameSelect';

export const Home = () => {
  return (
    <>
      <main className="character-select">
        <Intro />
        <GameSelect />
      </main>
    </>
  );
};
