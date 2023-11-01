import axios from 'axios';
import { API_URL } from '../store/config';

const ApiService = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiService;