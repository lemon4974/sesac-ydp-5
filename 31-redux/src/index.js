import React from 'react';
import ReactDOM from 'react-dom/client';

import App3 from './App3';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));

// store 정의 : 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App3 />
    </Provider>
  </React.StrictMode>
);
