import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  return (
    <div className='transaction-container'>
      <p>{transaction.name}</p>
      <div
      className={`${transaction.type === 'expense' ?
        'expense-indicator' :
        'budget-indicator'
      }`
      }></div>
      <p>&#8364;{transaction.number}</p>
      <button onClick={() => deleteTransaction(transaction.id)}>Remove</button>
    </div>
  )
}

export default Transaction;