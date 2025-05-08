import { loginStart, loginSuccess, loginFail, logout } from './loginSlice';
import { userLogin } from '../Services/auth_services';
import { toast } from 'react-toastify';

// Asynchronous action for handling user login
export const loginUser = (credentials, navigate) => async (dispatch) => {
  try {
    // Dispatch login start action
    dispatch(loginStart());
    
    // Call login API
    const response = await userLogin(credentials);
    
    // Show success message
    toast.success("Login successful!", { autoClose: 800 });
    
    // Save tokens to localStorage
    const token = response.data.token;
    localStorage.setItem("authToken", token.access);
    localStorage.setItem("refreshToken", token.refresh);
    
    // Get user profile data (can be expanded if your backend returns user data)
    const userData = {
      email: credentials.email,
      // Add other user data from response if available
    };
    
    // Dispatch success action with user data
    dispatch(loginSuccess(userData));
    
    // Navigate after a short delay
    setTimeout(() => {
      navigate("/home");
    }, 1000);
  } catch (error) {
    // Show error message
    toast.error(error.response?.data?.msg || "Login failed. Please try again.");
    
    // Dispatch failure action
    dispatch(loginFail(error.response?.data?.msg || "Authentication failed"));
  }
};

// Action for handling user logout
export const logoutUser = (navigate) => (dispatch) => {
  // Show logout message
  toast.info("Logging out...", { autoClose: 800 });
  
  // Dispatch logout action
  dispatch(logout());
  
  // Navigate after logout
  setTimeout(() => {
    navigate("/login");
  }, 1000);
};