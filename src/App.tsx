import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import type { User } from './interfaces/User';
// import { loginSuccess } from './state/authSlice';
import { axiosInterceptor } from './utils/axiosConfig';
import { useLogout } from './hooks/useLogout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const logout = useLogout();
  // const dispatch = useDispatch();

  axiosInterceptor(logout);

  return (
    <>
      <ToastContainer position="top-center" />
      <Outlet />;
    </>
  );
};

export default App;
