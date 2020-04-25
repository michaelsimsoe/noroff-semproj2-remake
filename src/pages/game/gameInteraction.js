import React from 'react';
import { Dice } from './dice';
import { StoryItem } from './storyItem';

export const GameInteractions = (props) => {
  return (
    <section className="game__interactions">
      <div className="story-board">
        <h2>The story</h2>
        <ul className="story-board__list" id="story-board-list">
          {props.stories
            .map((story, index) => {
              return (
                <StoryItem
                  key={index}
                  type={story.type}
                  player={story.player}
                  story={story.story}
                />
              );
            })
            .reverse()}
        </ul>
      </div>
      <Dice rollDice={props.rollDice} diceRolled={props.diceRolled} />
    </section>
  );
};
