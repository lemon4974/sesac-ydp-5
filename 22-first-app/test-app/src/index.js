import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './Clock';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(<h1>Hello world!</h1>);

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000);

//콘솔이 두 번 찍히는 것은 StrictMode 때문일 수 있다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
