import axios from "axios";
import { getToken } from "../context/AuthContext";

const api = axios.create({
  baseURL:
    "https://38ba-2409-40d4-106e-7593-d58-18f8-70d1-d6f2.ngrok-free.app/api",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true", // Bypass NGROK browser warning
  },
});

//request interceptor to attach token

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.warn("Token not found in AuthContext/localStorage");
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//response interceptor to handle 401 errors (unauthorized access)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Redirect to login or show session expired
      console.warn("Session expired. Redirecting to login...");
      localStorage.removeItem("authToken");
      window.location.href = "/login"; // or navigate() if using React Router
    }
    return Promise.reject(error);
  }
);

export default api;
