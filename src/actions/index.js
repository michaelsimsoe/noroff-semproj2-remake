import { FETCH_CHARACTER, FETCH_HOUSE } from './types';
const API = 'https://www.anapioficeandfire.com/api/';

export const fetchCharacter = (character) => {
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
          character: data[0],
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
