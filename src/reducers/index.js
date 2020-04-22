import { combineReducers } from 'redux';
import resourceReducer from './resourceReducer';
import gameReducer from './gameReducer';

export default combineReducers({
  gameResources: resourceReducer,
  game: gameReducer,
});
