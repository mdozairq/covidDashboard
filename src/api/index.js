import axios from 'axios';

const API = axios.create({ baseURL:'https://api.covid19api.com/' });

export const getSummary = () => API.get('/summary');
export const getCountry = (country) => API.get(`/total/dayone/country/${country}`);