import logo from './logo.svg';
import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler_ex from './ex/Handler_ex';
import ColorChange from './ex/ColorChange';
import DisappearText from './ex/DisappearText';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />
      <ClassBind />
      <hr />
      <Counter />
      <hr />
      <Handler_ex />
      <hr />
      <ColorChange />
      <hr />
      <DisappearText />
    </div>
  );
}

export default App;
