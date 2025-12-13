import axios from "axios";
import { getAccessToken, clearAccessToken } from "./../auth/token";

const api = axios.create({
  baseURL: "http://cloud-campus-apis.test/api/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// REQUEST INTERCEPTOR → Token Auto Attach
api.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// RESPONSE INTERCEPTOR → Handle Expired Token
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {

      // Token expired / invalid
      clearAccessToken();
      // optional → but you disabled it so I leave it commented
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

export default api;
