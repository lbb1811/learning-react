const defaultState = {
  inputValue: '123',
  list: [111, 222]
};

// reducer 可以接收 state数据，但是不去修改 state。把新的 state数据返回给 store。
export default (state = defaultState, action) => {
  console.log('store reducer: state, action', state, action);
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === 'add_todo_item') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    console.log(newState);
    return newState;
  }
  return state;
};
