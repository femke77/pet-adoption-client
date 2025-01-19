import { logout } from '../state/authSlice';
import { axiosInstance } from '../utils/axiosConfig';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const logoutUser = async () => {
  const response = await axiosInstance.post('/auth/logout');
  return response.data;
};

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('Logging out');
    dispatch(logout());
    logoutUser();
    navigate('/');
  };

  return handleLogout;
};
