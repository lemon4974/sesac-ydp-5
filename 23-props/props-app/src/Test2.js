import React, { Component } from 'react';
import coding from './toothless.jpg';

class Test2 extends Component {
  style = {
    color: 'orange',
    fontSize: '40px',
    marginTop: '20',
  };

  render() {
    return (
      <div style={this.style}>
        <h2>안녕하세요</h2>
        <img src={coding} />
      </div>
    );
  }
}

export default Test2;
