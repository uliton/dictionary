import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Check.scss';

export const Check = () => {
  const dictionary = useSelector(store => store.dictionary);
  return (
    <div className='check'>
      {dictionary.length < 10
        ? (
          <>
            <p className='check__content'>
              Нажаль, на даний момент у вашому словнику не достатньо слів щоб розпочати перевірку.
            </p>
            <p className='check__content check__content--mid'>
              Має бути хочаб 10 слів.
            </p>
            <p className='check__content check__content--mid'>
              А зараз лише {dictionary.length}
            </p>
          </>
        )
        : (
          <>
            <p className='check__content check__content--mid'>
              Можемо розпочинати перевірку
            </p>
            <Link to='/test' className='check__link'>
              <button className='check__button'>
                розпочати перевірку
              </button>
            </Link>
          </>
        )
      }
    </div>
  )
}