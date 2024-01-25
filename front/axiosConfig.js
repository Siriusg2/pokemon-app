import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
  timeout: 8000,
});

export default axiosInstance;
