import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/Main/Main'
import { Dictionary } from './components/Dictionary/Dictionary';
import { AddForm } from './components/AddForm/AddForm';

import { Check } from './components/Check/Check';
import { Test } from './components/Test/Test'

import { Resault } from './components/Resault/Resault'
import { Statistics } from './components/Statistics/Statistics'
import { NotFound } from './components/NotFound/NotFound'

import './App.scss';
import { testFromServer } from './test'

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(store => store);
  const dictionary = state.dictionary;
  // const test = state.test;
  const resaults = state.resaults;


  useEffect(() => {
    // if local storage is empty, we create it
    if (localStorage.getItem('state') === null) {
      localStorage.setItem('state', JSON.stringify(state));
    }
    
    const storageState = JSON.parse(localStorage.getItem('state'));

    // if state is in local storage and dictionary was updated
    if (dictionary.length > storageState.dictionary.length) {
      localStorage.setItem('state', JSON.stringify(state));
    }
    
    // if state is in local storage and resaults was updated
    if (resaults.length > storageState.resaults.length) {
      localStorage.setItem('state', JSON.stringify(state));
    }

    // if state is in local storage and dictionary is empty
    if (storageState.dictionary.length > dictionary.length) {
      const newStore = JSON.parse(localStorage.getItem('state'));

      dispatch({type: 'CREATE_STORE', payload: newStore});
    }

    // if state is in local storage and resaults is empty
    if (storageState.resaults.length > resaults.length) {
      const newStore = JSON.parse(localStorage.getItem('state'));

      dispatch({type: 'CREATE_STORE', payload: newStore});
    }
  });

  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/Pre_Dictionary' element={<Main />} />
        <Route path='/dictionary' element={<Dictionary />} />
        <Route path='/add' element={<AddForm />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/check' element={<Check />} />
        <Route path='/test' element={<Test />} />

        <Route path='/resault' element={<Resault />} />
        <Route path='/statistics' element={<Statistics />} />

      </Routes>

      <footer >
        <p style={{color: 'red', marginTop: '50px', textAlign: 'center'}}>
          footer
          <button
            onClick={() => {
              dispatch({type: 'CREATE_STORE', payload: testFromServer});
            }}
          >
            Quik add
          </button>
        </p>
      </footer>
    </div>
  );
};
