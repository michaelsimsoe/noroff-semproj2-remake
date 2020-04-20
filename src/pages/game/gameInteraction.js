import React from 'react';
import { Dice } from './dice';

export const GameInteractions = () => {
  return (
    <section class="game__interactions">
      <div class="story-board">
        <h2>The story</h2>
        <ul class="story-board__list" id="story-board-list"></ul>
      </div>
      <Dice />
    </section>
  );
};
