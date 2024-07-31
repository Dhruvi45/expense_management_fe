import React, { useEffect, useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import { getExpenses } from './services/api';
import ExpensesList, { Expense } from './components/expense/ExpensesList';
import AddExpense from './components/expense/AddExpense';
import Header from './components/header/Header';
import AppRoutes from './routes/AppRoutes';
function App() { 

  return (
    <>
    <Header/>
    <AppRoutes/>
    </>
  );
};

export default App;
