import axios from 'axios';

export default axios.create({
  //baseURL: 'http://10.0.2.2:3000',
  responseType: 'json',
  headers: {
    post: {
      'Content-Type': 'application/json',
    },
  },
});
