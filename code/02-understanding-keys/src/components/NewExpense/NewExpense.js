import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };


  return (
    <div className='new-expense'>
      {!showExpenseForm && <buton onClick={() => setShowExpenseForm(true)}>Add expense</buton>}
      {showExpenseForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setShowExpenseForm={setShowExpenseForm} />}
    </div>
  );
};

export default NewExpense;
