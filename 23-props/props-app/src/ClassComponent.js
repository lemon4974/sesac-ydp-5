import React from 'react';

class ClassComponent extends React.Component {
  // class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수 필수
  student = '허리 피자';
  render() {
    const { name } = this.props;
    console.log(this);
    return (
      <div>
        <h1>Hi {this.student}</h1>
        <p>여기는 Class Component!</p>
        {/* <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p> */}
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
          {/* const { name } = props;의 구조 분해 할당으로 가능한 위의 코드 */}
        </p>
      </div>
    );
  }
}

export default ClassComponent;
