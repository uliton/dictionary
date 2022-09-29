import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Nav } from './components/Nav/Nav';
import { Main } from './components/Main/Main'
import { Dictionary } from './components/Dictionary/Dictionary';
import { AddForm } from './components/AddForm/AddForm';

import { Stat } from './components/Stat'
import { Result } from './components/Result'
import { NotFound } from './components/NotFound'

import { Test } from './components/Test'

export const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Main />} />
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
