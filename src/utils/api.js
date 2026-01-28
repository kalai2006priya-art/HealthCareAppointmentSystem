import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api"
});

api.interceptors.request.use(req => {
  req.headers.authorization = localStorage.getItem("token");
  return req;
});

export default api;
