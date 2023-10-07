import { useState } from 'react';

const PrCounterFunction = () => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };
  const Decrease = () => {
    setNumber(number - 2);
  };
  return (
    <div>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Decrease</button>
      <h1>{number}</h1>
    </div>
  );
};
export default PrCounterFunction;
