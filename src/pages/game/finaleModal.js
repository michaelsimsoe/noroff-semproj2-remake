import React from 'react';
import { useHistory } from 'react-router-dom';

export const FinaleModal = (props) => {
  const history = useHistory();
  const finaleModalClass = props.winner
    ? 'finale-modal finale-modal--active'
    : 'finale-modal';

  if (props.winner) {
    setTimeout(() => {
      history.push('/finale');
    }, 2500);
  }

  return (
    <div id="finale-modal" className={finaleModalClass}>
      <div className="finale-modal__content">
        <h2>
          Congratulations, <span id="game-winner">{props.winner}</span>!
        </h2>
        <p>You are the first to reach Kings Landing!</p>
      </div>
    </div>
  );
};
