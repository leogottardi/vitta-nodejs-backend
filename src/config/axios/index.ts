import axios from 'axios';

axios.defaults.headers.post['Authorization'] = 'Basic Y3VzdG9tZXJzOjQ1MzAwMGY3LTQ3YTAtNDQ4OS1iYzQ3LTg5MWM3NDI2NTBlMg==';

const vitta_sso = axios.create({
  baseURL: "https://accounts.seguros.vitta.com.br/",
});

export { vitta_sso };
