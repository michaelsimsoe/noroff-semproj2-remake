import React from 'react';

export const Dice = (props) => {
  return (
    <>
      <div className="dice">
        <div id="dice-figure" className="dice__figure">
          <div className="dice__side dice__side-start">
            <div className="dice__dot"></div>
          </div>
          <div className="dice__side dice__side-one" aria-label="dice one dot">
            <div className="dice__dot"></div>
          </div>
          <div className="dice__side dice__side-two" aria-label="dice two dots">
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            className="dice__side dice__side-three"
            aria-label="dice three dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            className="dice__side dice__side-four"
            aria-label="dice four dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            className="dice__side dice__side-five"
            aria-label="dice five dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div className="dice__side dice__side-six" aria-label="dice six dots">
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
        </div>
        <button id="dice-btn" className="dice__button dice__button--hidden">
          ROLL
        </button>
      </div>
    </>
  );
};
