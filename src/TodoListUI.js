import React, { Component } from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render () {
    return (
      <div style={{margin: '10px 0 0 10px'}}>
        <Input placeholder="todo info"
          style={{width:300}} 
          value={this.props.inputValue}
          onChange={this.props.handleInputChange}
        />
        <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
        <List
          style={{marginTop:10,width:300}}
          size="small"
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (
            <List.Item onClick={() => {this.props.handleItemDelete(index);}}>{item}</List.Item>
          )}
        />
      </div>
    );
  }
}

export default TodoListUI;