import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.omdbapi.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});
