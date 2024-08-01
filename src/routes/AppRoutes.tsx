import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../components/dashboard/Dashboard';
import ExpensesList from '../components/expense/ExpensesList';
import CategoryList from '../components/category/CategoryList';
import AddExpense from '../components/expense/AddExpense';
import AddCategory from '../components/category/AddCategory';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-expense" element={<ExpensesList />} />
            <Route path="/add-expense" element={<AddExpense />} />
            <Route path="/manage-category" element={<CategoryList />} />
            <Route path="/add-category" element={<AddCategory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
