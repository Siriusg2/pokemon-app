import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_BASE_URL || "https://api_pokemon.gibsongil.store",
  timeout: 8000,
});

export default axiosInstance;
