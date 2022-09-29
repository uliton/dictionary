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
    <>
      <div className='form'>
        <div className="form__word">
          Word
          <input
            type="text"
            placeholder="Enter word"
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
          Translate
          <input
            type="text"
            placeholder="Enter word"
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
      </div>
      
      {dictionary.map(currentWord => (
        <div key={currentWord.id} style={{display: 'flex'}}>
          <p>
            {currentWord.word}
          </p>
          -
          <p>
            {currentWord.translate}
          </p>
        </div>
      ))}

      {error && (
        <p style={{color: 'red'}}>
          {error}
        </p>
      )}
    </>
  );
};