import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
// import * as actionTypes from './store/actionTypes';
import * as actionCreators from './store/actionCreators';

import 'antd/dist/antd.css';


class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log('store', store.getState());
    this.state = store.getState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    // 订阅store数据改变，更新state内容。
    store.subscribe(this.handleStoreChange);
  }
  render () {
    return (
      <div style={{margin: '10px 0 0 10px'}}>
        <Input placeholder="todo info"
          style={{width:300}} 
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
        <List
          style={{marginTop:10,width:300}}
          size="small"
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>
          )}
        />
      </div>
    );
  }

  handleInputChange (e) {
    // const action = {
    //   type: actionTypes.CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
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
    // const action = {
    //   type: actionTypes.ADD_TODO_ITEM
    // };
    const action = actionCreators.getAddItemAction();
    store.dispatch(action);
  }
  handleItemDelete (index) {
    // const action = {
    //   type: actionTypes.DELETE_TODO_ITEM,
    //   index
    // };
    const action = actionCreators.getDeleteItemAction(index);
    store.dispatch(action);
  }
}
export default TodoList;