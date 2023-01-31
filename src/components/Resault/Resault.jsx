import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Resault.scss'

export const Resault = () => {
  const resaults = useSelector(store => store.resaults)
  return (
    <div className='resault'>
      <p className='resault__text'>
        Ваш останній результат
      </p>

      <p className='resault__content'>
        {resaults.length && (
          `${resaults[0].resault}%`
        )}
      </p>

      <p className='resault__text'>
        Також ви можете переглянути статистику ваших перевірок
      </p>

      <Link to='/statistics' className='resault__button'>Статистика</Link>
    </div>
  )
}