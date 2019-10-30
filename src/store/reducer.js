import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
};

// reducer 可以接收 state数据，但是不去修改 state。把新的 state数据返回给 store。
export default (state = defaultState, action) => {
  console.log('【store reducer】: \nstate ', state, '\naction ', action);
  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === actionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log(newState);
    return newState;
  }
  if (action.type === actionTypes.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  return state;
};
