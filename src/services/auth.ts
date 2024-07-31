import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/users/login`, { email, password });
  localStorage.setItem('token', response.data.token);
  return response.status === 200;
};

export const register = async (username: string, email: string, password: string) => {
  const response = await axios.post(`${API_URL}/api/users/register`, { username, email, password });
  return response.status === 201;
};
