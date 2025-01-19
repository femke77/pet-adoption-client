import axios from 'axios';
import { toast } from 'react-toastify';

const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'https://pet-adoption-server-qa7c.onrender.com/'
      : 'http://localhost:3004',
  withCredentials: true,
});

const axiosInterceptor = (logout: () => void) => {
  // FIXME add a check for if coming from login page to allow 401 on login errors
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
