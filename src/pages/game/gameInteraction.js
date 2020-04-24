import React from 'react';
import { Dice } from './dice';

export const GameInteractions = (props) => {
  return (
    <section className="game__interactions">
      <div className="story-board">
        <h2>The story</h2>
        <ul className="story-board__list" id="story-board-list"></ul>
      </div>
      <Dice rollDice={props.rollDice} diceRolled={props.diceRolled} />
    </section>
  );
};
