import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class TestTransition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // show: true
      list: []
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  render () {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item, index) => (
              <CSSTransition // 不需要 in参数
                timeout={1000}
                classNames="fade" // 注意 classNames 带 's'
                unmountOnExit // 动画结束 移除元素
                onEntered={el => { el.style.color = 'blue'; }}
                appear={true}
                key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            ))
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>ToggleAdd</button>
      </Fragment>
    );
    // return (
    //   <Fragment>
    //     <CSSTransition
    //       in={this.state.show}
    //       timeout={1000}
    //       classNames="fade" // 注意 classNames 带 's'
    //       unmountOnExit // 动画结束 移除元素
    //       onEntered={el => { el.style.color = 'blue'; }}
    //       appear={true} // 初次进入时也要动画， 增加 .fade-appear .fade-appear-active 选择器
    //     >
    //       {/* <div className={this.state.show ? 'show' : 'hide'}>Hello World</div> */}
    //       <div>Hello World</div>
    //     </CSSTransition>
    //     <button onClick={this.handleToggle}>Toggle</button>
    //   </Fragment>
    // );
  }

  handleToggle () {
    this.setState({
      show: this.state.show ? false : true
    });
  }
  handleAddItem () {
    this.setState(state => ({
      list: [...state.list, 'item']
    }));
  }
}

export default TestTransition;