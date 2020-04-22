import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HouseSigil } from './houseSigil';
import { CharacterCard } from './characterCard';
import { SelectedCharacter } from './selectedCharacter';

export const GameSelect = (props) => {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const mainSectionClass = props.select ? 'houses' : 'houses  hidden-content';
  const characterSectionClass = props.select
    ? 'character-status'
    : 'character-status hidden-content';
  const playButtonClass = props.readyToPlay
    ? 'begin-btn'
    : 'begin-btn begin-btn--hidden';
  let houses = [];
  let characters = [];
  const selectHouse = (house) => {
    setSelectedHouse(house);
  };
  if (props.houses) {
    houses = props.houses.map((house) => {
      return (
        <HouseSigil key={house.name} house={house} selectHouse={selectHouse} />
      );
    });
  }

  if (props.characters && selectedHouse) {
    characters = props.characters
      .filter((character) => character.house === selectedHouse)
      .map((character) => {
        return (
          <CharacterCard
            key={character.name}
            character={character}
            selectCharacter={props.selectCharacter}
          />
        );
      });
  }

  return (
    <>
      <section className={mainSectionClass} id="character-select-houses">
        {houses}
      </section>
      <section
        id="character-select__characters"
        className="character-select__characters"
      >
        <div>{characters}</div>
      </section>
      <section className={characterSectionClass} id="character-status">
        {props.selectedCharacter.map((character, index) => {
          return (
            <SelectedCharacter
              key={character}
              player={index === 0 ? 'one' : 'two'}
              character={character}
              unsetCharacter={props.unsetCharacter}
            />
          );
        })}
        <Link className={playButtonClass} to="/game">
          <span className="begin-btn__text">
            Let The Board Game of Thrones Begin
          </span>
          <span className="begin-btn__caret">></span>
        </Link>
      </section>
    </>
  );
};
