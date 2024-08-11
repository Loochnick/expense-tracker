import React from 'react';

const Header = ({ balance, isAdding, setIsAdding }) => {
  return (
    <div>
      <h1 className='title'>Expense Tracker</h1>
      <div className='balance'>
        
        {balance < 0 ? <p>-&#8364;{Math.abs(balance)}</p> : <p>&#8364;{balance}</p>}
  
        <button onClick={() =>setIsAdding(!isAdding)}>Add</button>
      </div>
    </div>
  );
}

export default Header;