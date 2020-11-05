import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})
