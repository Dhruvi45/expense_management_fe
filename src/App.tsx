import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { getExpenses } from './services/api';
import ExpensesList, { Expense } from './components/ExpensesList';
import AddExpense from './components/AddExpense';
function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <AddExpense onAddExpense={(expense) => setExpenses([...expenses, expense])} />
      <ExpensesList expenses={expenses} />
    </div>
  );
};

export default App;
