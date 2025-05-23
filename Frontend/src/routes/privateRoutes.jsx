import React from 'react';
import { Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/loginSlice';

function PrivateRoutes({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const access_token = localStorage.getItem("authToken");

  if (isLoggedIn && access_token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default PrivateRoutes;