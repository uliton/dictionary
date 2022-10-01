import { Link } from "react-router-dom";
import headerImage from '../../images/header.jpeg'
import './Nav.scss';

export const Nav = () => {
  return (
    <div className='nav'>
      <Link to='/'>
        <img src={headerImage} alt="header" className="nav__image"/>
      </Link>
      <nav className="nav__container">
        <ul className='nav__list'>

          <li className='nav__item'>
            <Link to='/dictionary' className='nav__link'>Словник</Link>
          </li>

          <li className='nav__item'>
            <Link to='/add' className='nav__link'>Додати слова</Link>
          </li>

          <li className='nav__item'>
            <Link to='/check' className='nav__link'>Перевірити</Link>
          </li>

          <li className='nav__item'>
            <Link to='/result' className='nav__link'>Результати</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};