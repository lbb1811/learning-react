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

// redux-thunk 中间件的引入， 使actionCreator可以返回一个方法
// 在返回的方法中做复杂的逻辑。最后用 store的dispatch方法传递数据，创建action。
export const getTodoList = () => {
  return dispatch => {
    // 第一个参数是 store 的 dispatch 方法
    new Promise((resolve, reject) => {
      const res = {
        data: ['hello', 'javascript', 'world'],
        status: 200
      };
      resolve(res.data);
    })
      .then(response => {
        console.log('response', response);
        const action = initListAction(response);
        dispatch(action);
      });
  };
};
