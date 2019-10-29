import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render () {
    const { content } = this.props;
    return <div onClick={this.handleClick}>{content}</div>;
  }
  handleClick () {
    const { deleteItem, index } = this.props;
    console.log('TodoItem handleClick', index);
    // 调用父组件的删除方法
    deleteItem(index);
  }
}

export default TodoItem;
