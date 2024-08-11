import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TransactionsList from './components/TransactionsList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('transactions')) || [];
  const [transactions, setTransactions] = useState(initialState);
  const [isAdding, setIsAdding] = useState(false);
  const [expense, setExpense] = useState(0);
  const [budget, setBudget] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    caclulateBalance();
  }, [transactions]);

  const caclulateBalance = () => {
    let expenseTotal = 0;
    let budgetTotal = 0;

    transactions.map((transaction) => {
      if (transaction.type === 'expense') {
        expenseTotal += Number(transaction.number);
      } else {
        budgetTotal += Number(transaction.number);
      }
    });

    setExpense(expenseTotal);
    setBudget(budgetTotal);
    setBalance(budgetTotal - expenseTotal);
  }
  
  const addTransaction = (radioValue, detailsValue, amountValue) => {
    setTransactions([...transactions, {
      id: uuidv4(),
      type: radioValue,
      name: detailsValue,
      number: amountValue
    }]);
  }

  return (
    <>
    <Header balance={balance} isAdding={isAdding} setIsAdding={setIsAdding} />
    {isAdding ? <Form addTransaction={addTransaction} /> :null}
    <TransactionsList
      expense={expense}
      budget={budget}
      transactions={transactions}
      setTransactions={setTransactions} />
    </>
  );
}

export default App;
