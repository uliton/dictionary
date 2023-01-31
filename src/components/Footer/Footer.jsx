import { useDispatch } from 'react-redux';
import { testFromServer } from '../../test';
import './Footer.scss';

export const Footer = () => {
  const dispatch = useDispatch();
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p className='footer__text'>
          Cteated by Uliton&trade;
        </p>
        <button
          type='button'
          className='footer__button'
          onClick={() => {
            dispatch({type: 'CREATE_STORE', payload: testFromServer});
          }}
        >
          Fast dictionary adding
        </button>
      </div>
    </footer>
  )
}