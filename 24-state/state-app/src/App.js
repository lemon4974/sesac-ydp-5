// import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import PrCounter from './PrCounter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import PrCounterFunction from './PrCounterFunction';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <SayFunction />
      <hr />
      <CounterFunction value={'Plus 1'} />
      <hr />
      <PrCounter />
      <hr />
      <PrCounterFunction />
      <hr />
    </div>
  );
}

export default App;
