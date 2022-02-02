import axios from 'axios';

axios.defaults.headers.post['Authorization'] = `Basic ${process.env.BASIC_AUTH}`;

const vitta_sso = axios.create({
  baseURL: `${process.env.VITTA_SSO_BASE_URL}`,
});

export { vitta_sso };
