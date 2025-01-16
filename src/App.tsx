import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import type { User } from './interfaces/User';
// import { loginSuccess } from './state/authSlice';
import { axiosInterceptor } from './utils/axiosConfig';
import { useLogout } from './hooks/useLogout';

const App = () => {
  const logout = useLogout();
  // const dispatch = useDispatch();

  useEffect(() => {
    axiosInterceptor(logout);
  }, [logout]);

  return <Outlet />;
};

export default App;
