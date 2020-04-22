import React from 'react';

export const HouseSigil = (props) => {
  const getSigilPath = (name) => {
    let spaceToUnderscore = name.replace(/ /g, '_');
    let removedApostrophes = spaceToUnderscore.replace(/'/g, '').toLowerCase();
    return `assets/sigils/${removedApostrophes.toLowerCase()}.svg`;
  };
  const handleClick = () => {
    props.selectHouse(props.house.name);
  };
  return (
    <div className="houses__house" data-name={props.house.name}>
      <h3>{props.house.name}</h3>
      <figure tabIndex="0">
        <img
          onClick={handleClick}
          src={getSigilPath(props.house.name)}
          data-name={props.house.name}
          alt={`The sigil of ` + props.house.name}
        />
      </figure>
    </div>
  );
};
