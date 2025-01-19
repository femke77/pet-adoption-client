import axios from 'axios';

import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://pet-adoption-server-qa7c.onrender.com/'
      : 'http://localhost:3004',
  withCredentials: true,
});

// In your axios interceptor
const axiosInterceptor = (logout: () => void) => {
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const status = err?.response?.status || null;

      if (status === 401) {
        toast.info('Your session has expired. Please login again.');
        logout();
      }

      return Promise.reject(err);
    },
  );
};

export { axiosInterceptor, axiosInstance };
