import axios from "axios";
import { getAccessToken } from "./../auth/token";

const api = axios.create({
  baseURL: "http://cloud-campus-apis.test/api/v1", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor → token automatically add hoga
api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});


// RESPONSE INTERCEPTOR → 401 redirect
api.interceptors.response.use(
  (response) => response, // success
  (error) => {
    if (error.response?.status === 401) {

      // Token expired OR invalid
      localStorage.removeItem("access_token");
      window.location.href = "/signin";  // Auto redirect
    }

    return Promise.reject(error);
  }
);

export default api;
