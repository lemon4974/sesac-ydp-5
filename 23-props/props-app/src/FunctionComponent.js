import propTypes from 'prop-types';

export default function FunctionComponent(props) {
  const student = '이름임';
  const { name } = props;
  return (
    <div>
      <h1>Hi {student}</h1>
      <p>여기는 FunctionComponent</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p> */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
        {/* const { name } = props;의 구조 분해 할당으로 가능한 위의 코드 */}
      </p>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: '디폴트값',
};

FunctionComponent.propTypes = {
  name: propTypes.string,
};
