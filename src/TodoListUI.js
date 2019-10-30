import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件. 组件只有render函数，可以改成“无状态组件”提高渲染效率。
const TodoListUI = (props) => {
  return (
    <div style={{margin: '10px 0 0 10px'}}>
      <Input placeholder="todo info"
        style={{width:300}} 
        value={props.inputValue}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
      <List
        style={{marginTop:10,width:300}}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {props.handleItemDelete(index);}}>{item}</List.Item>
        )}
      />
    </div>
  );
};

// class TodoListUI extends Component {
//   render () {
//     return (
//       <div style={{margin: '10px 0 0 10px'}}>
//         <Input placeholder="todo info"
//           style={{width:300}} 
//           value={this.props.inputValue}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//         <List
//           style={{marginTop:10,width:300}}
//           size="small"
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={() => {this.props.handleItemDelete(index);}}>{item}</List.Item>
//           )}
//         />
//       </div>
//     );
//   }
// }

export default TodoListUI;