import axios from 'axios';

const API_URL = 'http://localhost:8081/account/';

const login = async (username, password) => {
  const response = await axios.post(`${API_URL}token`, { username, password });
  return response.data;
};

const register = async (username, password) => {
  const response = await axios.post(`${API_URL}register`, { username, password });
  return response.data;
};

export default {
  login,
  register
};