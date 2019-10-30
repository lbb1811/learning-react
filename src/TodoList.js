import React, { Component } from 'react';
import { connect } from 'react-redux';

// 可以改成无状态组件
class TodoList extends Component {
  render () {
    const {
      inputValue, list,
      changeInputValue, handleClick, deleteItem
    } = this.props;
    return (
      <div>
        <div>
          <input value={inputValue}
            onChange={changeInputValue}
          />
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return (<li key={index} onClick={() => {deleteItem(index);}}>{item}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}

// 把 store里的数据映射到 props中
const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};
// 把 store的 dispatch方法挂到 props中
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue (e) {
      console.log(e.target.value);
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handleClick () {
      const action = {
        type: 'add_item'
      };
      dispatch(action);
    },
    deleteItem (index) {
      console.log('delete item', index);
      const action = {
        type: 'delete_item',
        index
      };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
