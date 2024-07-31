import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../App';
import Login from '../components/Login';
import Register from '../components/Register';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
