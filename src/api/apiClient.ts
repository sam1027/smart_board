import axios from 'axios';
// import { authRefresh, refreshErrorHandler } from './authRefresh';
const host = process.env.REACT_APP_API +'/';

const apiClient = axios.create({
    baseURL: 'http://localhost:4000/',
    withCredentials: true,
    headers : {
      'Content-Type': 'application/json'
    }
});

// apiClient.interceptors.request.use( authRefresh, refreshErrorHandler);

export default apiClient;
