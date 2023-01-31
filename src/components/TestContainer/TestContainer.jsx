export const TestContainer = ({ word, variantes, choiceMaker }) => {
  return (
    <div className='test__container'>
      <p className='test__text test__text--mid test__text--title'>
        {word}
      </p>
      <p className='test__text test__text--mid'>
        в перекладі означає
      </p>

      <p className='test__text test__text--mid'>
        оберіть варіант
      </p>

      {variantes.map(variant => (
        <button
          key={variant.id}
          className='test__button'
          onClick={() => {
            choiceMaker(variant)
          }}
        >
          {variant.translate}
        </button>
      ))}
    </div>
  )
}