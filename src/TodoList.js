import React, { Component } from 'react';
import store from './store';
import * as actionCreators from './store/actionCreators';
import TodoListUI from './TodoListUI';

import 'antd/dist/antd.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log('store', store.getState());
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 订阅store数据改变，更新state内容。
    store.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}
      />
    );
  }

  handleInputChange (e) {
    // action 封装到 actionCreators中
    const action = actionCreators.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleStoreChange () {
    console.log('store change');
    this.setState(store.getState());
  }
  handleButtonClick () {
    if (!this.state.inputValue) return;
    const action = actionCreators.getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete (index) {
    const action = actionCreators.getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;