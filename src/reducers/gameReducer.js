import { SELECT_CHARACTER, REMOVE_CHARACTER } from '../actions/types';

export default (state = { players: [] }, action) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      if (state.players.length >= 2) return state;
      if (state.players.includes(action.payload.character)) return state;
      const playersArray = [...state.players, action.payload.character];
      return { ...state, players: playersArray };
    case REMOVE_CHARACTER:
      const reducedPlayersArray = state.players.filter(
        (player) => player !== action.payload.character
      );
      return { ...state, players: reducedPlayersArray };
    default:
      return state;
  }
};
