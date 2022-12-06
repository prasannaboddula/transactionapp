// Write your code here
import './index.css'

const TransactionItem = props => {
  const {moneyDetailsList, onDeleteTransaction} = props
  const {id, Title, Amount, Type} = moneyDetailsList

  const onDelete = () => {
    onDeleteTransaction(id)
  }

  return (
    <li className="part">
      <hr className="horizontal-line" />
      <p className="para">{Title}</p>
      <p className="para">Rs.{Amount}</p>
      <p className="para">{Type}</p>
      <button type="button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
