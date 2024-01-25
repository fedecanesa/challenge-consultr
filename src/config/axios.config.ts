import axios from 'axios';
import config from './configuration';

export default axios.create({
    baseURL: config.VITE_API_URL_BASE,
});
