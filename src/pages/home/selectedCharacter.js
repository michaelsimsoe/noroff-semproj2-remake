import React from 'react';

export const SelectedCharacter = (props) => {
  return (
    <div className="character-status__player">
      <div
        onClick={() => props.unsetCharacter(props.character)}
        className="character-status__deselect"
        tabIndex="0"
      >
        x
      </div>
      <h4>Player {props.player}</h4>
      <p>{props.character}</p>
    </div>
  );
};
