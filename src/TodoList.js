import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
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
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }

  handleInputChange (e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    };
    store.dispatch(action);
  }
  handleStoreChange () {
    console.log('store change');
    this.setState(store.getState());
  }
  handleButtonClick () {
    const action = {
      type: 'add_todo_item'
    };
    store.dispatch(action);
  }
}
export default TodoList;