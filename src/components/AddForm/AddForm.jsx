import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './AddForm.scss';

export const AddForm = () => {
  const dispatch = useDispatch();
  const dictionary = useSelector(store => store.dictionary);

  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [error, setError] = useState('');

  const handleAdderToDictionary = (word, translate) => {
    if (!word || !translate) {
      return
    }

    const alreadyHaveSuchWord = dictionary.find(checkWord => checkWord.word === word);

    if (alreadyHaveSuchWord) {
      setError('already have such word');
      return
    }

    const newWord = {
      id: new Date().getTime(),
      word,
      translate,
    }

    dispatch({type: 'ADD_WORD', payload: newWord})
    setWord('')
    setTranslate('')
  }

  return (
    <div className='form'>
      <div className="form__word">
        Слово
        <input
          type="text"
          placeholder="Введіть слово"
          value={word}
          onChange={(e) => {
            if (error) {
              setError('');
            }

            setWord(e.target.value);
          }}
          required
        />
      </div>

      <div className="form__translate">
        Преклад
        <input
          type="text"
          placeholder="Введіть переклад"
          value={translate}
          onChange={(e) => {
            setTranslate(e.target.value);
          }}
          required
        />
      </div>
      <button
        type='button'
        onClick={() => {
          handleAdderToDictionary(word, translate);
        }}
      >
        Add
      </button>

      {error && (
        <p style={{color: 'red'}}>
          {error}
        </p>
      )}
    </div>
  );
};