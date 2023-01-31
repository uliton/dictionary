import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { TestContainer } from '../TestContainer';
import './Test.scss';

export const Test = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector(store => store);
  const dictionary = state.dictionary;
  const [usedWords, setUsedWords] = useState([]);
  const [currentWord, setCurrentWord] = useState([]);
  const [renderTest, setRenderTest] = useState([]);
  const [rightAnswers, setRightAnswers] = useState(0);

  useEffect(() => {
    if (usedWords.length === 10) {

      const testResult = {
        time: String(new Date()).split(' ').slice(1, 5).join(' '),
        resault: rightAnswers * 10,
      }

      dispatch({type: 'ADD_RESAULT', payload: testResult});
      navigate('/resault');
    }

    if (dictionary.length && usedWords.length < 10) {
      
      let word = null;
      while (!word) {

        const randomIndex = Math.floor(Math.random() * dictionary.length);
        if (!usedWords.some(word => word.id === dictionary[randomIndex].id)) {

          word = dictionary[randomIndex]
        }
      }

      const otherWords = []
      while (otherWords.length < 3) {

        const randomIndex = Math.floor(Math.random() * dictionary.length);
        if (!otherWords.some(word => word.id === dictionary[randomIndex].id) && word.id !== dictionary[randomIndex].id) {

          otherWords.push(dictionary[randomIndex])
        }
      }

      const testArr = [word, ...otherWords].sort((a, b) => 0.5 - Math.random())

      setCurrentWord(word);
      setRenderTest(testArr);
    }
  }, [dictionary, usedWords]);

  const choiceMaker = (variant) => {
    if (variant.id === currentWord.id) {
      setRightAnswers((pr) => (pr + 1))
    }

    setUsedWords([...usedWords, currentWord])
  }

  return (
    <div className='test'>
      {dictionary.length < 10 && (
        <>
          <h2 className='test__text test__text--mid'>
            Ні! :0)
          </h2>
          <h3 className='test__text test__text--mid'>
            Так так робити не можна!
          </h3>
        </>
      )}

        {renderTest.length > 0 && (
          <TestContainer
            word={currentWord.word}
            variantes={renderTest}
            choiceMaker={choiceMaker}
          />
        )}
    </div>
  );
};
