import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// Auto-attach token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token; 
  }
  return config;
});

export default API;