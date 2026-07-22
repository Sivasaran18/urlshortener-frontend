import axios from "axios";

const API = axios.create({
  baseURL:
    "https://urlshortener-backend-op87.onrender.com/api"
});

export default API;