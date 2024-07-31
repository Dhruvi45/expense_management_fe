import React, { useState } from 'react';
import { addExpense } from '../services/api';
import EMInput from '../controls/EMInput';

interface AddExpenseProps {
  onAddExpense: (expense: any) => void;
}
export default function AddExpense({ onAddExpense }: AddExpenseProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = await addExpense({ description, amount: parseFloat(amount), date });
    onAddExpense(newExpense);
    setDescription('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <EMInput
          label={'Description'}
          type={'text'}
          placeholder={'Description'} />
        {/* <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required /> */}
      </div>
      <div>
        <label>Amount</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}
