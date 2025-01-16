import axios from "axios";
import { toast } from "react-toastify";

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === "production" ? "" : "http://localhost:3004",
  withCredentials: true,
});

const axiosInterceptor = (logout: () => void) => {
  // intercept the response
  axiosInstance.interceptors.response.use(
    (res) => res,
    async (err) => {
      const status = err?.response?.status || null;
      // if unauthorized redirect to login page
      if (status === 403 || status === 401) {
        console.log(status);
        toast.info("Your session has expired. Please login");

        logout();
      }

      return Promise.reject(err);
    }
  );
};

export { axiosInterceptor, axiosInstance };
