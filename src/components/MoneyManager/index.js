import {Component} from 'react'
import {v4} from 'uuid'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    transactionDetailsList: [],
    optionId: transactionTypeOptions[0].optionId,
  }

  onChangeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  onChangeOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }

    this.setState(prevState => ({
      transactionDetailsList: [
        ...prevState.transactionDetailsList,
        newTransaction,
      ],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDeleteTransaction = id => {
    const {transactionDetailsList} = this.state
    const updateDetails = transactionDetailsList.filter(
      eachDetails => eachDetails.id !== id,
    )

    this.setState({transactionDetailsList: updateDetails})
  }

  getIncome = () => {
    const {transactionDetailsList} = this.state
    let incomeAmount = 0

    transactionDetailsList.forEach(eachTransaction => {
      if (
        eachTransaction.type ===
        eachTransaction.transactionTypeOptions[1].optionId
      ) {
        incomeAmount += eachTransaction.Amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionDetailsList} = this.state
    let expensesAmount = 0

    transactionDetailsList.forEach(eachTransaction => {
      if (
        eachTransaction.type ===
        eachTransaction.transactionTypeOptions[0].optionId
      ) {
        expensesAmount += eachTransaction.Amount
      }
    })
    return expensesAmount
  }

  getBalance = () => {
    const {transactionDetailsList} = this.state
    let incomeAmount = 0
    let expensesAmount = 0
    let balanceAmount = 0

    transactionDetailsList.forEach(eachTransaction => {
      if (
        eachTransaction.type ===
        eachTransaction.transactionTypeOptions[1].optionId
      ) {
        incomeAmount += eachTransaction.Amount
      } else {
        expensesAmount += eachTransaction.Amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount

    return balanceAmount
  }

  render() {
    const {
      titleInput,
      amountInput,
      optionId,
      transactionDetailsList,
    } = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="money-manager-container">
        <div className="name-container">
          <h1 className="title">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          balanceAmount={balanceAmount}
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction-part">
          <div className="form-container">
            <h1 className="transaction-heading">Add Transaction</h1>
            <form className="form" onSubmit={this.onAddTransaction}>
              <label htmlFor="title" className="input-label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={titleInput}
                placeholder="TITLE"
                onChange={this.onChangeTitle}
                className="input"
              />

              <label htmlFor="amount" className="input-label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amountInput}
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
                className="input"
              />
              <label htmlFor="type" className="input-label">
                TYPE
              </label>
              <select
                id="select"
                value={optionId}
                onChange={this.onChangeOptionId}
                className="input"
              >
                {transactionTypeOptions.map(eachTransactionDetails => (
                  <option
                    value={eachTransactionDetails.optionId}
                    key={eachTransactionDetails.optionId}
                  >
                    {eachTransactionDetails.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="button">
                Add
              </button>
            </form>
          </div>
          <div className="form-container transaction-container">
            <h1 className="transaction-heading">History</h1>
            <ul className="trans-part">
              <li className="part">
                <p className="t-heading">Title</p>
                <p className="t-heading">Amount</p>
                <p className="t-heading">Type</p>
                <p> </p>
              </li>
              {transactionDetailsList.map(eachDetailedTransactiopn => (
                <TransactionItem
                  key={eachDetailedTransactiopn.id}
                  transactionDetailsList={eachDetailedTransactiopn}
                  onDeleteTransaction={this.onDeleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
