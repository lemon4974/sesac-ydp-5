const PLUS = 'counter/PLUS';
const MINUS = 'counter/MINUS';

// plus(), minus()
// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록
export const plus = () => ({ type: PLUS }); // return {type: 'counter/PLUS' }
export const minus = () => ({ type: MINUS }); // return {type: 'counter/PLUS' }

// state 초기값 정의
const initialState = {
  number: 50,
};

// reducer 정의 : 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
