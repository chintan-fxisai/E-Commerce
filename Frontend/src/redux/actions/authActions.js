import { loginStart, loginSuccess, loginFail, logout } from '../loginSlice';
import { userLogin } from '../../Services/auth_services';
import { toast } from 'react-toastify';

export const loginUser = (credentials, navigate, { closeLoginModal }) => async (dispatch) => {
  try {
    dispatch(loginStart());

    const response = await userLogin(credentials);

    toast.success("Login successful!", { autoClose: 800 });

    const token = response.data.token;
    localStorage.setItem("authToken", token.access);
    localStorage.setItem("refreshToken", token.refresh);

    const userData = {
      email: credentials.email,
    };

    dispatch(loginSuccess(userData));

    setTimeout(() => {
      navigate("/home");
      if (closeLoginModal) closeLoginModal();
    }, 1000);

  } catch (error) {
    toast.error(error.response?.data?.msg || "Login failed. Please try again.");
    dispatch(loginFail(error.response?.data?.msg || "Authentication failed"));
  }
};

export const logoutUser = (navigate) => (dispatch) => {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userData");
  dispatch(logout());
  toast.info("You have been logged out successfully.", { autoClose: 800 });
  setTimeout(() => {
    navigate("/home");
  }, 1000);
};