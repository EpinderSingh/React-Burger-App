import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-app-epinder-default-rtdb.firebaseio.com/',
});

export default instance;
