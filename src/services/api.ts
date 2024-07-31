import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getExpenses = async () => {
  const response = await axios.get(`${API_URL}/expenses`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const addExpense = async (expense: { description: string; amount: number; date: string }) => {
  const response = await axios.post(`${API_URL}/expenses`, expense, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};
