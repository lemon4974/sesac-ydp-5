// state 초기값 정의
const initialState = {
  number: 50,
};

// reducer 정의 : 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return { number: state.number + 1 };
    case 'MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
