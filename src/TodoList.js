import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['111','222','333', 999]
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
            ref={input => {this.input = input;}}
          />
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul ref={ul => {this.ul = ul;}}>
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
    // const inputValue = e.target.value;
    // 使用 ref 
    const inputValue = this.input.value;
    // setState 使用回调时，是异步的。要先保存要使用的值。
    this.setState(() => ({
      inputValue
    }));
    // this.setState({
    //   inputValue: e.target.value
    // });
  }
  handleButtonClick () {
    if (!this.state.inputValue) return;
    this.setState(state => ({
      list: [...state.list, state.inputValue],
      inputValue: ''
    }), () => {
      console.log('this.ul div length', this.ul.querySelectorAll('div').length);
    });
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
