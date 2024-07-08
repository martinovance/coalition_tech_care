import axios from 'axios';

let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);

const Api = axios.create({
  baseURL: 'https://fedskillstest.coalitiontechnologies.workers.dev',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Basic ${auth}`
  },
});

export default Api;
