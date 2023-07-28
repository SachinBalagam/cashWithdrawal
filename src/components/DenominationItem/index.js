// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationsList, onClickAmount} = props
  const {value} = denominationsList

  const onAmountClick = () => {
    onClickAmount(value)
  }

  return (
    <li className="each-denomination">
      <button type="button" className="button" onClick={onAmountClick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
