import { FETCH_CHARACTER, FETCH_HOUSE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CHARACTER:
      const characterName = action.payload.character.name;
      return {
        ...state,
        characters: { [characterName]: action.payload.character },
      };
    case FETCH_HOUSE:
      const houseName = action.payload.house.name;
      return { ...state, houses: { [houseName]: action.payload.house } };
    default:
      return state;
  }
};
