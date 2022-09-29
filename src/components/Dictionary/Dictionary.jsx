import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './Dictionary.scss';

export const Dictionary = () => {
  const dictionary = useSelector(store => store.dictionary);

  return (
    <div className="dictionary">
      <p className="dictionary__title">
        Це ваш словник:
      </p>

      {dictionary.length === 0 && (
        <p className="dictionary__helper-text">
          Нажаль ваш словник покищо порожній,
          але ви можете додати до нього деілька слів
        </p>
      )}

      {dictionary.length > 0 && dictionary.length < 10 && (
        <p className="dictionary__helper-text">
          Вітаю! Початок покладено.
          <br />
          Щоб розпочати перевірку додайте ще
          {' '}{10 - dictionary.length}{' '}
          {10 - dictionary.length >= 5
            ? 'слів'
            : 10 - dictionary.length !== 1
              ? 'слова'
              : 'слово'
          }
        </p>
      )}

      {dictionary.length >= 10 && (
        <p className="dictionary__helper-text">
          Супер! Ви можете ропочати перевірку у будь який момент.
        </p>
      )}

      <table className="dictionary__table table">
        <thead className="table__head">
          <tr>
            <th className="table__item table__item--n">№</th>
            <th className="table__item table__item--word">Слово</th>
            <th className="table__item table__item--translate">Переклад</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map((currentWord, index) => (
            <tr key={currentWord.id}>
              <td className="table__item table__item--n">{index + 1}</td>
              <td className="table__item table__item--word">{currentWord.word}</td>
              <td className="table__item table__item--translate">{currentWord.translate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to='/add' className="dictionary__link">
        <button className="dictionary__button">додати</button>
      </Link>
    </div>
  )
}