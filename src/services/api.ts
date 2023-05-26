import axios from 'axios';
import md5 from 'md5';
const ts = Number(new Date());
const hash = md5(ts + import.meta.env.VITE_PRIVATE_KEY + import.meta.env.VITE_PUBLIC_KEY);

const api = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: {
      apikey: import.meta.env.VITE_PUBLIC_KEY,
      ts: ts,
      hash: hash,
    },
  })
  export default api