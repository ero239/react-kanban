export const ADD_NEW_LIST = 'ADD_NEW_LIST';
export const ADD_NEW_CARD = 'ADD_NEW_CARD';
export const DELETE_LIST = 'DELETE_LIST';
export const DELETE_CARD = 'DELETE_CARD';

export const addNewList = (list) => ({
  type: ADD_NEW_LIST,
  list
});
export const addNewCard = (card) => ({
  type: ADD_NEW_CARD,
  card
});
export const deleteList = (list) => ({
  type: DELETE_LIST,
  list
});
export const deleteCard = (card) => ({
  type: DELETE_CARD,
  card
});
