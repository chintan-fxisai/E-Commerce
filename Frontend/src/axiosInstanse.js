import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/api/user'

const instance = axios.create({
  baseURL: baseURL,
  headers: { 'content-type': 'application/json' }
});


// Request Interceptor
instance.interceptors.request.use(
  (config) => {

    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// Response Interceptor
instance.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response && error.response.status === 401) {
      if (error.response.status === 401) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("refreshToken");
        window.location.href = "/login";
      } else if (error.response.status === 500) {
        console.error("Server error! Please try again later.");
      }
    }
    return Promise.reject(error);
  }
);

export default instance