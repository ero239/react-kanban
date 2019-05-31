import {combineReducers} from 'redux';

import {ADD_NEW_LIST, ADD_NEW_CARD, DELETE_LIST, DELETE_CARD} from './actions.js';

export const kanban = (
  state = {
    arrayofLists: []
  },
  action
) => {
  switch (action.type) {
    case ADD_NEW_LIST:
      return {
        ...state,
        arrayofLists: action.payload
      };
    case ADD_NEW_CARD:
      return {
        ...state,
        arrayofLists: action.payload
      };
    case DELETE_LIST:
      return {
        ...state,
        arrayofLists: action.payload
      };
    case DELETE_CARD:
      return {
        ...state,
        arrayofLists: action.payload
      };
    default:
      return state;
  }
};

export const reducers = combineReducers({
  kanban
});
