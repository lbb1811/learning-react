import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 当组件的 state, props 发生改变时, render 函数会重新执行一次。
  render () {
    const { content, test } = this.props;
    return <div onClick={this.handleClick}>{test} - {content}</div>;
    // 可直接写方法渲染虚拟DOM
    // return React.createElement('div', {}, 'item');
  }
  handleClick () {
    const { deleteItem, index } = this.props;
    console.log('TodoItem handleClick', index);
    // 调用父组件的删除方法
    deleteItem(index);
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired, // 必传，可以设置默认值避免报错。
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
};
TodoItem.defaultProps = {
  test: 'hello'
};

export default TodoItem;
