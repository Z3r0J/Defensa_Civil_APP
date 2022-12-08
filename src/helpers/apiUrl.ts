import axios from 'axios';

export const apiUrl = axios.create({
  baseURL: 'https://adamix.net/defensa_civil/def/',
});
