import React, { useEffect, useRef } from 'react';

export const Dice = (props) => {
  const one = useRef();
  const two = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const six = useRef();

  const allDiceSides = [
    one.current,
    two.current,
    three.current,
    four.current,
    five.current,
    six.current,
  ];
  useEffect(() => {
    if (props.rollDice > 0) {
      setTimeout(() => {
        allDiceSides.forEach((side) => {
          if (
            side.dataset.side ===
            ['one', 'two', 'three', 'four', 'five', 'six'][props.rollDice - 1]
          ) {
            side.classList.add('dice__side--active');
          } else {
            side.classList.remove('dice__side--active');
          }
        });
        props.diceRolled();
      }, 3000);
    }
    // eslint-disable-next-line
  }, [props.rollDice]);

  const diceFigureClass =
    props.rollDice > 0 ? 'dice__figure--active' : 'dice__figure"';

  return (
    <>
      <div className="dice">
        <div id="dice-figure" className={diceFigureClass}>
          <div className="dice__side dice__side-start">
            <div className="dice__dot"></div>
          </div>
          <div
            ref={one}
            data-side="one"
            className="dice__side dice__side-one"
            aria-label="dice one dot"
          >
            <div className="dice__dot"></div>
          </div>
          <div
            ref={two}
            data-side="two"
            className="dice__side dice__side-two"
            aria-label="dice two dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            ref={three}
            data-side="three"
            className="dice__side dice__side-three"
            aria-label="dice three dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            ref={four}
            data-side="four"
            className="dice__side dice__side-four"
            aria-label="dice four dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            ref={five}
            data-side="five"
            className="dice__side dice__side-five"
            aria-label="dice five dots"
          >
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
            <div className="dice__dot"></div>
          </div>
          <div
            ref={six}
            data-side="six"
            className="dice__side dice__side-six"
            aria-label="dice six dots"
          >
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
