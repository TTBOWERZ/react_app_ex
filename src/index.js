import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';

// STORE -> Globalized state(s)

// ACTION -> change state 'how many todo items'
const count_todo = () => {
  return {
    type: 'ADD';
  }
}

const rm_todo = () => {
  return {
    type: 'SUB'
  }
}

// REDUCER -> how actions transform state to next
const curr_total = (state = 0, action) => {
  switch(action.type){
    case "ADD":
      return state + 1;
    case "SUB":
      return state -1;
  }
}

let store = createStore(curr_total);

// Display items in amount in console
store.subscribe(() => console.log(store.getState());

// DISPATCH -> runs action
store.dispatch(count_todo());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
