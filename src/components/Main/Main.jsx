import { Link } from "react-router-dom"
import './Main.scss';

export const Main = () => {
  return (
    <div className="main">
      <h1 className="main__title">
        Привіт!
      </h1>
      <p className="main__content">
        Цей додаток створено щоб ви мали змогу попрактикуватись у вивченні іноземних слів.
      </p>
      <p className="main__content">
        Все просто. <Link to='/add' className="main__link">Додавайте</Link> слова до свого словника, або тисніть кнопку "Словник". Створюйте свій особистий словничок та перевіряйте свою пам'ять беручи участь у простому тестуванні!
      </p>
      <p className="main__content main__content--last">
        Хай щастить! ;0)
      </p>
    </div>
  )
}