import React from 'react';

export const CharacterCard = (props) => {
  const selectCharacter = () => {
    props.selectCharacter(props.character.name);
  };
  return (
    <div onClick={selectCharacter} className="character-card">
      <img
        src={'assets/misc/' + props.character.gender.toLowerCase() + '.svg'}
        alt=""
      />
      <h3>{props.character.name}</h3>
      <button className="char-select-btn">Choose Character</button>
    </div>
  );
};
