import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/Main/Main'
import { Dictionary } from './components/Dictionary/Dictionary';
import { AddForm } from './components/AddForm/AddForm';

import { Stat } from './components/Stat'
import { Result } from './components/Result'
import { NotFound } from './components/NotFound'

import { Test } from './components/Test/Test'
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const state = useSelector(store => store);
  const dictionary = state.dictionary;

  useEffect(() => {
    // if local storage is empty, we create it
    if (localStorage.getItem('state') === null) {
      localStorage.setItem('state', JSON.stringify(state));
    }
    
    const storageState = JSON.parse(localStorage.getItem('state'));

    // if state is in local storage and dictionary updated
    if (dictionary.length > storageState.dictionary.length) {
      localStorage.setItem('state', JSON.stringify(state));
    }

    // if state is in local storage and dictionary is empty
    if (storageState.dictionary.length > dictionary.length) {
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

        <Route path='/stat' element={<Stat />} />
        <Route path='/result' element={<Result />} />
        <Route path='*' element={<NotFound />} />

        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
};
