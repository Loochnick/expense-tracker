import React, { useState } from 'react';
import Transaction from './Transaction';

const TransactionsList = ({ transactions, setTransactions, expense, budget }) => {
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id))
  }

  const [search, setSearch] = useState('');

  return (
    <div>
      <div className='expense-budget-container'>
        <div className='expense-container'>
          <p>Expense</p>
          <p>&#8364;{expense}</p>
        </div>
        <div className='expense-container'>
          <p>Budget</p>
          <p>&#8364;{budget}</p>
        </div>
      </div>

      <h1>Transactions List</h1>

      <input onChange={(e) => setSearch(e.target.value)} type='text' placeholder='Search here'/>

      {transactions
        .filter((transaction) => {
          return search.toLowerCase() === '' ?
          transaction :
          transaction.name.toLowerCase().includes(search);
        })
        .map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
    </div>
  );
}

export default TransactionsList;