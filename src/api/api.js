import axios from "axios";

const url = 'https://api.github.com'

const api = axios.create({
  baseURL: url,
  headers:{'Access-Control-Allow-Origin':'*'}
});

export default api;