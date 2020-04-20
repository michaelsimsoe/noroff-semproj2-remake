import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Intro } from './intro';
import { GameSelect } from './gameSelect';

import { fetchCharacter, fetchHouse } from '../../actions/index';

export const Home = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacter('Arya Stark'));
    dispatch(fetchHouse('House Stark of Winterfell'));
  }, []);
  return (
    <>
      <main className="character-select">
        <Intro />
        <GameSelect />
      </main>
    </>
  );
};
