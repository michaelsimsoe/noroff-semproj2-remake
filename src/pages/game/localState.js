export const localInitialState = {};

export const localReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TRAP':
      return {
        ...state,
        [action.payload.player]: {
          trap: action.payload.trap,
        },
      };
    case 'DECREMENT_TRAP':
      const newPlayerTrapAmount = (state[
        action.payload.player
      ].trap.consequence.amount -= 1);
      return {
        ...state,
        [action.payload.player]: {
          ...state[action.payload.player],
          trap: {
            ...state[action.payload.player].trap,
            amount: newPlayerTrapAmount,
          },
        },
      };
    default:
      return state;
  }
};

export const addNewTrapAction = (player, trap) => {
  return {
    type: 'ADD_TRAP',
    payload: {
      player,
      trap,
    },
  };
};

export const removeTrapAmount = (player, trap) => {
  return {
    type: 'DECREMENT_TRAP',
    payload: {
      player,
    },
  };
};
