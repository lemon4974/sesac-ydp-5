// // import Alphabet from './Alphabet';
// // import Info from './ex/Event_ex';

// function App() {
//   return (
//     <div className="App">
//       {/* <Alphabet /> */}
//       {/* <Info /> */}
//     </div>
//   );
// }

// export default App;

import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import RefSample1 from './RefSample1';
import RefSample2 from './RefSample2';
import RefSample3 from './RefSample3';
import RefSample4 from './RefSample4';

function App() {
  return (
    <div className="App">
      <RefSample1 />
      <hr />
      <RefSample2 />
      <hr />
      <RefSample3 />
      <hr />
      <RefSample4 />
      <hr />
      <LifeCycleFunc />
      <hr />
      <LifeCycleClass />
    </div>
  );
}

export default App;
