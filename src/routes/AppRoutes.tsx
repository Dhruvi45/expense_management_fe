import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import Dashboard from '../components/dashboard/Dashboard';
import ExpensesList from '../components/expense/ExpensesList';
import CategoryList from '../components/category/CategoryList';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-expense" element={<ExpensesList />} />
            <Route path="/manage-category" element={<CategoryList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
