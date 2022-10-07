import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const defaultState = {
  dictionary: [],
  test: [],
  resaults: [],
} 

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return {...state, dictionary: [...state.dictionary, action.payload]};

    case 'CREATE_STORE':
      return action.payload;

    case 'TEST':
      return {...state, test: [...state.test, ...action.payload]};

    case 'ADD_RESAULT':
      return {...state, resaults: [action.payload, ...state.resaults]};

    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
