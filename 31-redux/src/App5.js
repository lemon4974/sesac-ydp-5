import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import bankReducer from './store/BankReducer';

export default function App5() {
  const money = useSelector((state) => state.bank.money);
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <hr />
      <h1>코딩온 은행</h1>
      <h2>잔액: {money}</h2>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={() => dispatch({ type: 'DEPOSIT', payload: num })}>
        입금
      </button>
      <button onClick={() => dispatch({ type: 'WITHDRAW', payload: num })}>
        출금
      </button>
    </div>
  );
}
