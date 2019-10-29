import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [111,222,333]
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  getTodoItem () {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem key={index} index={index} content={item}
          deleteItem={this.handleItemDelete}
        />
      );
    });
  }

  handleInputChange (e) {
    const inputValue = e.target.value;
    // setState 使用回调时，是异步的。要先保存要使用的值。
    this.setState(() => ({
      inputValue
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleButtonClick () {
    this.setState(state => ({
      list: [...state.list, state.inputValue],
      inputValue: ''
    }));
  }
  handleItemDelete (index) {
    console.log('index', index);
    this.setState(state => {
      const list = [...state.list];
      list.splice(index,1);
      return {
        list
      };
    });
  }
}

export default TodoList;
