import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
  componentDidMount() {
    //컴포넌트가 마운트 될 때
    console.log('컴포넌트 마운트!!!');
  }
  componentDidUpdate() {
    //컴포넌트가 마운트 될 때
    console.log('컴포넌트 업데이트!!!');
  }

  componentWillUnmount() {
    console.log('컴포넌트 언 마운트');
  }
  render() {
    return <div>현재 Number 값은 {this.props.number}입니다.</div>;
  }
}
