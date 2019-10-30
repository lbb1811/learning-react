import * as actionTypes from './actionTypes';

export const getInputChangeAction = value => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value
});

export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM
});

export const getDeleteItemAction = index => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index
});

export const initListAction = data => ({
  type: actionTypes.INIT_LIST_ACTION,
  data
});

export const getInitList = () =>({
  type: actionTypes.GET_INIT_LIST
});
