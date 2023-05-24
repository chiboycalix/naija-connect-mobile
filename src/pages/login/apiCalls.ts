import axios from 'axios';

const API_BASE_URL = 'http://localhost:2000/api/v1';


export const getUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`);
  return response.data;
};

export const login = async ({email, password}: {email: string; password:string}) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
  return response.data;
};