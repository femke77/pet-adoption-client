import { Outlet } from 'react-router-dom';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import type { User } from './interfaces/User';
import { loginSuccess } from './state/authSlice';
import { axiosInterceptor } from './utils/axiosConfig';
import { useLogout } from './hooks/useLogout';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CryptoJS from 'crypto-js';
import { useEffect } from 'react';
import Navigation from './components/NavBar';

const App = () => {
  const logout = useLogout();
  const dispatch = useDispatch();

  axiosInterceptor(logout);

  useEffect(() => {
    const data = sessionStorage.getItem('ud');
    if (data) {
      const secretKey = import.meta.env.VITE_SECRET_KEY;
      const bytes = CryptoJS.AES.decrypt(data, secretKey);
      const decryptedUserDetails = JSON.parse(
        bytes.toString(CryptoJS.enc.Utf8),
      );
      dispatch(loginSuccess(decryptedUserDetails));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ToastContainer position='top-center' transition={Zoom} theme='colored' />
      <Navigation />
      <main className='min-h-screen'>
        <Outlet />
      </main>
    </>
  );
};

export default App;
