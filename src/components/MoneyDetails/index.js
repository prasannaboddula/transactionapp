// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <ul className="unordered-list">
      <li className="list-container con-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="container">
          <p className="title">Your Balance</p>
          <p className="amount">RS {balanceAmount}</p>
        </div>
      </li>
      <li className="list-container con-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="container">
          <p className="title">Your Income</p>
          <p className="amount">RS {incomeAmount}</p>
        </div>
      </li>
      <li className="list-container con-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div className="container">
          <p className="title">Your Expenses</p>
          <p className="amount">RS {expensesAmount}</p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
