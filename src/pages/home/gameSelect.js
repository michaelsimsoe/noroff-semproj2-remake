import React from 'react';

export const GameSelect = () => {
  return (
    <>
      <section
        className="houses hidden-content"
        id="character-select-houses"
      ></section>
      <section
        id="character-select__characters"
        className="character-select__characters"
      ></section>
      <section
        className="character-status hidden-content"
        id="character-status"
      >
        <div
          className="character-status__player character-status__player--hidden"
          id="select-player-one"
        ></div>
        <div
          className="character-status__player character-status__player--hidden"
          id="select-player-two"
        ></div>
        <a
          className="begin-btn begin-btn--hidden"
          data-cy="begin-btn"
          id="begin-btn"
          href="game.html"
        >
          <span className="begin-btn__text">
            Let The Board Game of Thrones Begin
          </span>
          <span className="begin-btn__caret">></span>
        </a>
      </section>
    </>
  );
};
