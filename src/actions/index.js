import {
  FETCH_CHARACTER,
  FETCH_HOUSE,
  SELECT_CHARACTER,
  REMOVE_CHARACTER,
} from './types';
const API = 'https://www.anapioficeandfire.com/api/';

export const fetchCharacter = (character, house) => {
  const URL = `${API}characters?name=${encodeURI(character)}`;
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      dispatch({
        type: FETCH_CHARACTER,
        payload: {
          character: {
            house,
            ...data[0],
          },
        },
      });
      // return await data[0];
    } catch (error) {
      console.log(
        'There has been a problem with your fetch operation: ',
        error.message
      );
    }
  };
};

export const fetchHouse = (house) => {
  const URL = `${API}houses?name=${encodeURI(house)}`;
  return async (dispatch) => {
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      dispatch({
        type: FETCH_HOUSE,
        payload: {
          house: data[0],
        },
      });
      // return await data[0];
    } catch (error) {
      console.log(
        'There has been a problem with your fetch operation: ',
        error.message
      );
    }
  };
};

export const selectCharacter = (character) => {
  return {
    type: SELECT_CHARACTER,
    payload: {
      character,
    },
  };
};

export const removeCharacter = (character) => {
  return {
    type: REMOVE_CHARACTER,
    payload: {
      character,
    },
  };
};
