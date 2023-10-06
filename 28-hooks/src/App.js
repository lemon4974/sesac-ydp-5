// import logo from './logo.svg';
// import './App.css';

import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import Faq from './components/Faq';

function App() {
  useTitle('React Hooks 연습중입니당');
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 />
      <hr />
      <UseReducerEx />
      <hr />
      <Faq />
    </div>
  );
}

export default App;
