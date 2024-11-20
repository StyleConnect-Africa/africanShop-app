import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;
console.log(import.meta.env);
console.log(BASE_URL);

export const apiClient = axios.create({
  baseURL: BASE_URL,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("africanShopUserToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
