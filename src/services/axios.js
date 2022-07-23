import axios from 'axios';

export default axios.create({
  baseURL: 'http://ec2-3-144-146-82.us-east-2.compute.amazonaws.com/api/',
});
