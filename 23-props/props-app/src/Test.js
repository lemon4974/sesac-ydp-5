import React, { Component } from 'react';

// class ClassComponent extends React.Component {
class Test extends Component {
  // 클래스형 컴포넌트는 render 함수 필수
  name = '최제윤';
  my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  render() {
    return (
      <>
        <div style={this.my_style}>
          <h1> {this.name}</h1>
        </div>
      </>
    );
  }
}

export default Test;
