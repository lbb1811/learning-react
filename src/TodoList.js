import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [111,222,333]
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          <input id="insertArea" className="input" 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                // <li key={index} onClick={this.handleItemDelete.bind(this, index)}
                //   // 开启 插入的HTML不转义 (默认会转义，防止xss攻击)
                //   dangerouslySetInnerHTML={{__html:item}}
                // ></li>
                <TodoItem key={index} index={index} content={item}
                  // 向子组件传递方法时，绑定this值，使其this为父组件的this
                  deleteItem={this.handleItemDelete.bind(this)}
                />
              );
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange (e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  handleButtonClick () {
    this.setState(state => {
      return {
        list: [...state.list, state.inputValue],
        inputValue: ''
      };
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
