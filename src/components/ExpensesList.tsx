import React from 'react';

export interface Expense {
  _id: string;
  description: string;
  amount: number;
  date: string;
}

export interface ExpensesListProps {
  expenses: Expense[];
}
export default function ExpensesList({expenses }:ExpensesListProps ) {
    return (
        <div>
          <h2>Expenses</h2>
          <ul>
            {expenses.map((expense:Expense) => (
              <li key={expense._id}>
                {expense.description}: ${expense.amount} on {new Date(expense.date).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      );
}
