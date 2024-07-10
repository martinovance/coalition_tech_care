import axios from 'axios';

let username = process.env.REACT_APP_BASIC_AUTH_USERNAME;
let password = process.env.REACT_APP_BASIC_AUTH_PASSWORD;
let auth = btoa(`${username}:${password}`);

const Api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`
  },
});

export default Api;
