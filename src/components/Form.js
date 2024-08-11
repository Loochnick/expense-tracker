import React, {useState} from 'react';

const Form = ({ addTransaction }) => {
  const [radioValue, setRadioValue] = useState(null);
  const [amountValue, setAmountValue] = useState('');
  const [detailsValue, setDetailsValue] = useState('');

  const handleSubmit = (e) => {
    if (amountValue.trim() !== '' &&
      detailsValue.trim() !== '' &&
      radioValue !== null
    ) {
        e.preventDefault();
        addTransaction(radioValue, detailsValue, amountValue);
        setRadioValue(null);
        setAmountValue('');
        setDetailsValue('');
      } else {
        e.preventDefault();
      }
  }

  return (
    <div>
      <form className='form-container' onSubmit={handleSubmit}>
        <input
          className='form-input'
          type='number'
          placeholder='Enter Amount'
          id='amount'
          value={amountValue}
          onChange={e => setAmountValue(e.target.value)}
        />
        <input
          className='form-input'
          type='text'
          placeholder='Enter Details'
          id='details'
          value={detailsValue}
          onChange={e => setDetailsValue(e.target.value)}
        />

        <div className='radio-container'>
          <input
            type='radio'
            name='transaction-type'
            value='expense'
            id='expense'
            checked={radioValue === 'expense'}
            onChange={e => setRadioValue(e.target.value)}
          /> <label htmlFor='expense'>Expense</label>
          <input
            type='radio'
            name='transaction-type'
            value='budget'
            id='budget'
            checked={radioValue === 'budget'}
            onChange={e => setRadioValue(e.target.value)}
          /> <label htmlFor='budget'>Budget</label>
        </div>

        <button>Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;