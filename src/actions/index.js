import {
  FETCH_CHARACTER,
  FETCH_HOUSE,
  SELECT_CHARACTER,
  REMOVE_CHARACTER,
  DICE_ROLLING,
  SET_CURRENT_PLAYER,
  ADD_MOVES_TO_PLAYER,
  MOVE_TOKEN,
  REGISTER_PLAYER_TOKEN,
  SET_PLAYER_TRAPPED,
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

export const setDiceRoll = (diceNumber, rolling) => {
  return {
    type: DICE_ROLLING,
    payload: {
      rolling,
      diceNumber,
    },
  };
};

export const setCurrentPlayer = (player) => {
  return {
    type: SET_CURRENT_PLAYER,
    payload: {
      player,
    },
  };
};

export const movePlayer = (moving) => {
  return {
    type: MOVE_TOKEN,
    payload: {
      moving,
    },
  };
};

export const addMovesToPlayer = (player, moves) => {
  return {
    type: ADD_MOVES_TO_PLAYER,
    payload: {
      player,
      moves,
    },
  };
};

export const registerPlayerToken = (player, token) => {
  return {
    type: REGISTER_PLAYER_TOKEN,
    payload: {
      player,
      token,
    },
  };
};

export const trapPlayer = (player, trap) => {
  return {
    type: SET_PLAYER_TRAPPED,
    payload: {
      player,
      trap,
    },
  };
};
