import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000',
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});
