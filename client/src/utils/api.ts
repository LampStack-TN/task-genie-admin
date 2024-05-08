// Import necessary packages
import config from "../config.js"
import axios from "axios"

// Define your API URL
const API_URL = config.apiUrl;

export const ApiClient = () => {
  // Create a new axios instance
  const api = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add a request interceptor to add the JWT token to the authorization header
  api.interceptors.request.use(
    async (config) => {
      const token = await localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  const get = (id: string) => {
    return api.get(id).then((response) => response);
  };

  const post = (body:any) => {
    return api.post(body).then((response) => response);
  };

  const put = (id:string, body:any) => {
    return api.put(id, body).then((response) => response);
  };
  const del = (id:string) => {
    return api.delete(id).then((response) => response);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
