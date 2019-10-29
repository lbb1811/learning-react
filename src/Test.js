import React, { Component } from 'react';

class Test extends Component {
  render () {
    const { content } = this.props;
    console.log('test render', content);
    return <div style={{background:'green',width:200}}>{content}</div>;
  }
}

export default Test;
