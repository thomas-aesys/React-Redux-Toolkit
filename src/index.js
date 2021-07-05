import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterReducer';
import {catSlice} from './slices/catReducer'
import { Provider } from 'react-redux';
import { mySaga } from './saga/catSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cat: catSlice.reducer
  },
  middleware:[...getDefaultMiddleware({thunk:false}),sagaMiddleware]
})

sagaMiddleware.run(mySaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
