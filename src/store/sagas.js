import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';


function* getInitList () {
  let data = [];
  const action = yield actionCreators.initListAction(data);
  // put 方法 传递 action
  yield put(action);

  // yield new Promise((resolve, reject) => {
  //   const res = {
  //     data: ['hello', 'javascript', 'world'],
  //     status: 200
  //   };
  //   resolve(res.data);
  // }).then(response => {
  //   console.log('response', response);
  //   const action =  actionCreators.initListAction(response);
  //   // put 方法 传递 action
  //   put(action);
  // });
}

function* mySage () {
  yield takeEvery(actionTypes.GET_INIT_LIST, getInitList);
}

export default mySage;