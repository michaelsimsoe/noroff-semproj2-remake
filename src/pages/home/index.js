import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Intro } from './intro';
import { GameSelect } from './gameSelect';

import houses from './houses';

import {
  fetchCharacter,
  fetchHouse,
  selectCharacter,
  removeCharacter,
} from '../../actions/index';

export const Home = () => {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(true);
  const [select, setSelect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let count = 0;
    if (
      state.gameResources.characters.length === 10 &&
      state.gameResources.houses.length === 5
    ) {
      setLoading(false);
      return;
    }
    houses.forEach((house) => {
      dispatch(fetchHouse(house.house));
      house.characters.forEach((character) =>
        dispatch(fetchCharacter(character, house.house))
      );
      count++;
    });
    if (count === 5) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, [dispatch]);

  const showCharacterSelect = () => {
    setSelect(true);
  };

  const setCharacter = (character) => {
    dispatch(selectCharacter(character));
  };

  const unsetCharacter = (character) => {
    dispatch(removeCharacter(character));
  };
  return (
    <>
      <main className="character-select">
        <Intro
          select={select}
          showSelect={showCharacterSelect}
          loading={loading}
        />
        <GameSelect
          select={select}
          houses={state.gameResources.houses}
          characters={state.gameResources.characters}
          selectCharacter={setCharacter}
          unsetCharacter={unsetCharacter}
          selectedCharacter={state.game.players}
          readyToPlay={state.game.players.length === 2}
        />
      </main>
    </>
  );
};
