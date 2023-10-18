import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles/Box.css';

function App2() {
  // [Before]
  // const [number, setNumber] = useState(100);
  // const plus = () => setNumber(number + 1);
  // const minus = () => setNumber(number - 1);

  // [After]

  const number = useSelector((state) => state.number);
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}
const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1 : </h2>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 : </h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3 : </h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <div className="Box">
      <h2>Box4 : {number} </h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>PLUS</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>MINUS</button>
    </div>
  );
};

export default App2;
