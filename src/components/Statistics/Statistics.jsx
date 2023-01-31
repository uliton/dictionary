import { useSelector } from 'react-redux'
import './Statistics.scss';

export const Statistics = () => {
  const resaults = useSelector(store => store.resaults);
  return (
    <div className='statistics'>
      <p className='statistics__text'>
        Тут ви можете переглянути статистику ваших перевірок
      </p>

      <table className='statistics__table table'>
        <thead className='table__head'>
          <tr>
            <th className='table__item table__item--time'>Час</th>
            <th className='table__item'>Рузультат</th>
          </tr>
        </thead>

        <tbody>
          {resaults.map(resault => (
            <tr key={resault.time}>
              <td className='table__item table__item--time'>
                {resault.time}
              </td>
              <td className='table__item table__item--resault'>
                {`${resault.resault}%`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}