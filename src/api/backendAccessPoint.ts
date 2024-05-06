import axios from "axios";

export const BackendAccessPoint = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

BackendAccessPoint.interceptors.request.use((config) => {
  let token = localStorage.getItem("jwt_token");

  if(token !== null) {
    if(config.headers){
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
