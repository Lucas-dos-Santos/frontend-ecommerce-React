import axios from 'axios';

export default axios.create({
  baseURL: 'https://apiauthrails.herokuapp.com/api/',
});
