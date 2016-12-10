import axios from 'axios';

const INSTANCE = axios.create({
  baseURL: '/api',
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
});

export default {
  async request(requestConfig) {
    try {
      return await INSTANCE.request(requestConfig);
    } catch (error) {
      throw error;
    }
  },
};
