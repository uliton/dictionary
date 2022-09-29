import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrowImage from '../../images/arrow.png';
import './AddForm.scss';

export const AddForm = () => {
  const dispatch = useDispatch();
  const dictionary = useSelector(store => store.dictionary);
  // const regExp = new RegExp("[а-щА-ЩЬьЮюЯяЇїІіЄєҐґ]+$");

  const [word, setWord] = useState('');
  const [translate, setTranslate] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleAdderToDictionary = (word, translate) => {
    if (!word || !translate) {
      return
    }

    const alreadyHaveSuchWord = dictionary.find(checkWord => checkWord.word === word);

    if (alreadyHaveSuchWord) {
      setError('Це слово вже є у вашому словнику');
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
    navigate('/dictionary')
  }

  return (
    <div className='form'>
      <div className="form__word--container">
        Слово
        <input
          type="text"
          placeholder="Введіть слово"
          className="form__word--input"
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

      <img src={arrowImage} alt="arrow" className='form__arrow-image' />

      <div className="form__word--container">
        Преклад
        <input
          type="text"
          placeholder="Введіть переклад"
          className="form__word--input"
          value={translate}
          onChange={(e) => {
            setTranslate(e.target.value);
          }}
          required
        />
      </div>

      <button
        className='form__button'
        onClick={() => {
          handleAdderToDictionary(word, translate);
        }}
        hidden
      >
        додати
      </button>

      {error && (
        <p style={{color: 'red', margin: 'auto'}}>
          {error}
        </p>
      )}
    </div>
  );
};