import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux"
import {Provider} from "react-redux"

import './index.css';
import reducer from "./reducers"
import {plusNum, numInput, clearInput} from "./actions"
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(reducer)
let inputValue = 0; let resultValue = 0;
store.dispatch(numInput(inputValue, 3))
console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
