import { useSelector, useDispatch } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
// 객체 구조 분해로 꺼내오는 것
// import를 할 때도 어떤 것을 꺼내오는지 선택해야 하기 때문
// import error는 대체로 철자나 {} 여부의 문제
import { plus, minus } from '../store/counterReducer';

export const Box1Container = () => {
  return <Box1 />;
};
export const Box2Container = () => {
  return <Box2 />;
};
export const Box3Container = () => {
  return <Box3 />;
};
export const Box4Container = () => {
  const number = useSelector((state) => state.counter.number);

  const dispatch = useDispatch();

  return (
    <Box4
      number={number}
      onPlus={() => dispatch(plus())}
      onMinus={() => dispatch(minus())}
    />
  );
};
