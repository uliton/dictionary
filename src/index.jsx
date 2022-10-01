import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const defaultState = {
  dictionary: [],
  test: {},
  resaults: [],
} 

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_WORD':
      return {...defaultState, dictionary: [...state.dictionary, action.payload]};

    case 'CREATE_STORE':
      return action.payload;

    case 'TEST':
      return {...defaultState, test: [...state.tests, action.payload]};

    case 'ADD_RESAULT':
      return {...defaultState, test: [...state.resaults, action.payload]};

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
