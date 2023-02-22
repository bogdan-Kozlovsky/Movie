import axios from 'axios';

// require('dotenv').config();

export const instance = axios.create({
  // baseURL: process.env.REACT_APP_BASE_URL,
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: '75df7ca909e962c1330641811fad3003',
    // language: 'en-US',

    // api_key: process.env.REACT_APP_API_KEY,
  },
});
