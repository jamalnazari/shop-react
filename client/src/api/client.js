import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.warn("Unauthorized access");
    } else if (error.response?.status === 403) {
      console.warn("Access forbidden");
    } else if (!error.response) {
      console.error("Network error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default api;
