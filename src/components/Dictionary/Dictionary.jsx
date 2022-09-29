import { Link } from "react-router-dom"

export const Dictionary = () => {
  return (
    <div>
      <p>
        Це ваш словник:
      </p>

      <p>
        нажаль ваш словник покищо порожній, але ви можете додати до ньога деілька слів
      </p>

      <Link to='/add'>
        <button>додати</button>
      </Link>
    </div>
  )
}