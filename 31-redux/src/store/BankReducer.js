const initialState = {
  money: 0,
};

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { money: state.money + parseInt(action.payload) };

    case 'WITHDRAW':
      return { money: state.money + parseInt(action.payload) };

    default:
      return state;
  }
};

export default bankReducer;
