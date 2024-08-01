import React from 'react';
import EMTable from '../../controls/EMTable';

export interface Expense {
  _id: string;
  description: string;
  amount: number;
  date: string;
}

export interface ExpensesListProps {
  expenses: Expense[];
}
export default function ExpensesList() {
  // const expenses:Expense[] = []
  const expenses = [
    {
      user_id: '60d21b4667d0d8992e610c85',
      amount: 50.75,
      description: 'Grocery shopping',
      category: 'Food',
      date: new Date('2024-07-15'),
      created_at: new Date('2024-07-15T08:30:00Z'),
      updated_at: new Date('2024-07-15T08:30:00Z'),
    },
    {
      user_id: '60d21b4667d0d8992e610c85',
      amount: 15.00,
      description: 'Uber ride',
      category: 'Transportation',
      date: new Date('2024-07-16'),
      created_at: new Date('2024-07-16T09:15:00Z'),
      updated_at: new Date('2024-07-16T09:15:00Z'),
    },
    {
      user_id: '60d21b4667d0d8992e610c85',
      amount: 100.00,
      description: 'Monthly subscription',
      category: 'Entertainment',
      date: new Date('2024-07-01'),
      created_at: new Date('2024-07-01T12:00:00Z'),
      updated_at: new Date('2024-07-01T12:00:00Z'),
    },
    {
      user_id: '60d21b4667d0d8992e610c85',
      amount: 75.25,
      description: 'Restaurant dinner',
      category: 'Food',
      date: new Date('2024-07-20'),
      created_at: new Date('2024-07-20T20:00:00Z'),
      updated_at: new Date('2024-07-20T20:00:00Z'),
    },
    {
      user_id: '60d21b4667d0d8992e610c85',
      amount: 30.00,
      description: 'Gas refill',
      category: 'Transportation',
      date: new Date('2024-07-10'),
      created_at: new Date('2024-07-10T10:00:00Z'),
      updated_at: new Date('2024-07-10T10:00:00Z'),
    }
  ];

  const tableColumn: any = [
    {
      key: "description",
      label: "Description",
      width: 150,
      resizable: true,
    },
    {
      key: "amount",
      label: "Amount",
      width: 150,
      resizable: true,
    },
    {
      key: "category",
      label: "Category",
      width: 150,
      resizable: true,
    },
    {
      key: "date",
      label: "Date",
      width: 150,
      resizable: true,
    },
  ]
  return (
    <div>
      <h2>Expenses</h2>
      <EMTable data={expenses} columns={tableColumn}/>
    </div>
  );
}
