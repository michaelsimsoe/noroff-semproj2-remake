import { FETCH_CHARACTER, FETCH_HOUSE } from '../actions/types';

export default (state = { characters: [], houses: [] }, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      const characterArray = [...state.characters, action.payload.character];
      return {
        ...state,
        characters: characterArray,
      };
    case FETCH_HOUSE:
      const housesArray = [...state.houses, action.payload.house];
      return {
        ...state,
        houses: housesArray,
      };
    default:
      return state;
  }
};
