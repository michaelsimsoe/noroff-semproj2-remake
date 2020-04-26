import {
  SELECT_CHARACTER,
  REMOVE_CHARACTER,
  DICE_ROLLING,
  SET_CURRENT_PLAYER,
  ADD_MOVES_TO_PLAYER,
  MOVE_TOKEN,
  REGISTER_PLAYER_TOKEN,
  SET_WINNER,
  RESET_GAME,
} from '../actions/types';

export default (
  state = {
    players: [],
    winner: '',
    gameState: { diceRolling: false, diceNumber: 1 },
  },
  action
) => {
  switch (action.type) {
    case SELECT_CHARACTER:
      if (state.players.length >= 2) return state;
      if (state.players.includes(action.payload.character)) return state;
      const playersArray = [
        ...state.players,
        { name: action.payload.character, moves: 0 },
      ];
      return { ...state, players: playersArray };
    case REMOVE_CHARACTER:
      const reducedPlayersArray = state.players.filter(
        (player) => player !== action.payload.character
      );
      return { ...state, players: reducedPlayersArray };
    case DICE_ROLLING:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          diceRolling: action.payload.rolling,
          diceNumber: action.payload.diceNumber || 1,
        },
      };
    case SET_CURRENT_PLAYER:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          currentPlayer: action.payload.player,
        },
      };
    case ADD_MOVES_TO_PLAYER:
      const newPlayers = state.players.map((player) => {
        if (player.name === action.payload.player) {
          player.moves += action.payload.moves;
        }
        return player;
      });
      return {
        ...state,
        players: [...newPlayers],
        gameState: {
          ...state.gameState,
        },
      };
    case REGISTER_PLAYER_TOKEN:
      const playerName = action.payload.player.name;
      const playerToken = action.payload.token;
      const newPlayerArray = [...state.players].map((player) => {
        if (player.name === playerName) {
          console.log(`adding ${playerToken} to ${player.name}/${playerName}`);
          // player.token = playerToken;
        }
        return player;
      });
      return { ...state, players: newPlayerArray };
    case MOVE_TOKEN:
      return {
        ...state,
        gameState: {
          ...state.gameState,
          moving: action.payload.moving,
        },
      };
    case SET_WINNER:
      return {
        ...state,
        winner: action.payload.player,
      };
    case RESET_GAME:
      return {
        ...state,
        players: [],
      };
    default:
      return state;
  }
};
