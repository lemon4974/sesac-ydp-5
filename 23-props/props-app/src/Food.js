import React, { Component } from 'react';
import PropTypes from 'prop-types';

// class ClassComponent extends React.Component {
class Food extends Component {
  favFood = '콩나물국밥';
  color = {
    color: 'red',
  };

  render() {
    const { name } = this.props;
    console.log('props: ', this.props);

    return (
      <div>
        <p>
          <b>{name}</b> <span style={this.color}> {this.favFood} </span>진짜
          맛있는데...
        </p>
        <hr></hr>
      </div>
    );
  }

  static defaultProps = {
    name: '현대옥',
  };
}

Food.defaultProps = {
  name: '현대옥',
};

export default Food;
